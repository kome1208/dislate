/**
 * Imports
 * @param getBoolean: Fetches a boolean setting from a file.
 * @param {FormDivider}: Used to render Form Items on the screen.
 * @param Text: Used to render styleable text on the screen.
 * @param TouchableOpacity: Used to render a component child inside of this component, but adds a small opacity effect upon press.
 * @param getByName: Allows you to fetch a component from Discord.
 * @param StyleSheet: Used to create React Native StyleSheeets, for styling components.
 * @param Constants: Used for constant values which may differ between themes like colors and font weights.
 * @param name: The name of the plugin, from @arg manifest.json
 * @param {* from utils}: Utility functions used throughout the component.
 * @param DebugItem: A component to render a toggleable option state. This is its own component so that it can have independent state.
 * @param ExitWrapper: A component to wrap the rest of the components into a ScrollView with capibility to close the page upon swiping right. Used by passing the TSX to render inside the Component prop. Can be a single component or a Fragment <>.
 */
import { getBoolean } from 'enmity/api/settings';
import { FormDivider, Text, TouchableOpacity, View } from 'enmity/components';
import { getByName } from 'enmity/metro';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import { name } from '../../manifest.json';
import { fetch_debug_arguments, filter_item, filter_color, map_item, send_debug_log, shadow } from '../utils';
import InfoItem from './InfoItem';
import Dialog from './Dialog';
import ExitWrapper from './ExitWrapper';
import SectionWrapper from './SectionWrapper';

/**
 * The main Search module, used to input text and store it. This is easy to make from scratch, but because Discord already made one I might aswell use it.
 * @param Search: The main Search Bar component
 */
const Search = getByName('StaticSearchBarContainer');

/**
 * Main Info Page Component
 * @param channel_id: The main channel ID, passed as a string from the Debug command/component.
 * @param channel_name: The name of the channel, used to display in the toast if the message is sent.
 */
export default ({ channel_id, channel_name }) => {
    /**
     * Main states used throughout the component to allow storing options and the possible search query.
     * @param {Getter, Setter} options: The list of available options, populated by the @arg React.useEffect
     * @param {Getter, Setter} query: The query that has been searched with the Search module.
     */
    const [options, setOptions] = React.useState<string[]>([])
    const [query, setQuery] = React.useState([])

    /**
     * Use an asynchronous call to fetch the available debug arguments, on the first mount of the component to not cause any refetching on re-renders.
     * @param fetch_debug_arguments: Gets a list of debug arguments.
     */
    React.useEffect(async function() {
        setOptions(Object.keys(await fetch_debug_arguments()))
    }, [])

    /**
     * @param styles: StyleSheet of generic styles used throughout the component.
     */
    const styles = StyleSheet.createThemedStyleSheet({
        /**
         * @param button: The main button styling, to make it look cute and pretty :D
         * The values for @arg width, @arg marginLeft, and @arg marginRight may seem quite random, but the margins are just (100 (%) - @arg width) / 2 each. This evenly splits the available space on each side of the button.
         */
        button: {
            width: '90%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Constants.ThemeColorMap.HEADER_PRIMARY,
            borderRadius: 10,
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: 20
        },
        /**
         * @param text: The main styling for the text component
         * 
         * @func filter_color: Takes an @arg input color and a @arg light and @arg dark color, and calculates whether the color should be the light color or dark color based on the @arg boundary provided as a multiplier (0.8 -> 80% contrast).
                * @arg Note: The boundary value provided for this function is based on theory, and not 50%, as that will cause weird side effects.
         */
        text: {
            color: filter_color(Constants.ThemeColorMap.HEADER_PRIMARY[0], '#FFF', "#000", 0.8, 'buttons in debug info menu'),
            textAlign: 'center',
            paddingLeft : 10,
            paddingRight : 10,
            letterSpacing: 0.25,
            fontFamily: Constants.Fonts.PRIMARY_BOLD
        },
        buttonText: {
            fontSize: 16,
        },
        optionText: {
            fontSize: 12
        },
        container: {
            width: '90%',
            marginLeft: '5%',
            borderRadius: 10,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
            ...shadow
        }
    })
    
    /**
     * Main return element of the Component.
     * @returns {~ TSX Page}
     */
    return <>
        {/**
         * The main search container. Any text that is inputted into this, will be stored into the query state, and filtered on re-render.
         */}
        <Search
            placeholder="Search Options"
            onChangeText={(text: string) => setQuery(text)}
        />
        {/**
         * The main part of the component, showing available options to toggle.
         * This is wrapped in an @arg ExitWrapper component to allow the user to close out the page by swiping to the right.
         */}
        <ExitWrapper Component={<View
            style={{
                marginBottom: 100
            }}
        >
            <SectionWrapper label='Options' component={<>
                {/**
                 * The main section of available options to be selected by the User.
                 */}
                <View style={styles.container}>
                    {/**
                     * Maps through the list of filtered available items, and returns a @arg DebugItem component for each one.
                     * @param options: The list of available options.
                     * @param query: Any possible text that has been typed in the search box.
                     * @param DebugItem: Component to render toggleable options, with independent state.
                     */}
                    {map_item(
                        filter_item(options, (option: string) => option.toLowerCase().includes(query)), 
                        (option: string) => <InfoItem option={option} channel_id={channel_id} channel_name={channel_name} />,
                        'list of debug information options'
                    )}
                    <FormDivider />
                </View>
            </>} />
            {/**
             * Button to send the Full Debug log, hence the text @arg Send_All
             */}
            <TouchableOpacity
                style={styles.button}
                onPress={async function() {
                    /**
                     * Send a full log in the current channel.
                     */
                    await send_debug_log(
                        options, 
                        {channel_id: channel_id, channel_name: channel_name}, 
                        'full', 
                        'full log in Info Component.'
                    )
            }}>
                <Text style={[styles.text, styles.buttonText]}>Send All</Text>
            </TouchableOpacity>
            {/**
             * Button to send the Partial Debug log, hence the text @arg Send_Message instead.
             */}
            <TouchableOpacity
                style={styles.button}
                onPress={async function() {
                    /**
                     * @param debug_options: Filtered list of options which only includes ones that the user has chosen to be true.
                     */
                    const debug_options = filter_item(options, (item: string) => getBoolean(name, item, false), 'filtering chosen debug options')

                    /**
                     * Send the debug log with the filtered list.
                     */
                    await send_debug_log(
                        debug_options, 
                        {channel_id: channel_id, channel_name: channel_name}, 
                        'partial', 
                        'partial log in Info Component.'
                    )
            }}>
                <Text style={[styles.text, styles.buttonText]}>Send Message</Text>
            </TouchableOpacity>
            {/**
             * Renders a custom Dialog implementation to display a tip to help you navigate the page.
             */}
            <Dialog 
                label="Information" 
                content={`You can either tap on each item to toggle it and press "Send Message", or you can long-press on an item to only send that item.\n\nTo close this dialog, press on it.`} 
                type={'standard'}
            />
        </View>} />
    </>;
}