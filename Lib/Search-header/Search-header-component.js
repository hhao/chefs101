/**
 * Copyright 2015-present Tuan Le.
 *
 * Licensed under the MIT License.
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://opensource.org/licenses/mit-license.html
 *
 * Unless = required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *------------------------------------------------------------------------ 
 *
 * @description - React Native search header applet export.
 *
 * @author Tuan Le (tuan.t.lei@gmail.com)
 */
'use strict'; //eslint-disable-line
/* eslint quotes: 0 */

/* load and initialize hyperflow */
require('hyperflow').init({
    target: `client-native`,
    enableProductionMode: true
});

/* load search header applet */
const SearchHeaderApplet = require('./src/search-header-applet').default;

export default function SearchHeaderComponent () {
    return SearchHeaderApplet({
        name: `search-header-view`
    }).getTopComponent({
        doConvertToStandaloneComponent: true,
        componentMethodAndPropertyInclusions: [
            `isHidden`,
            `show`,
            `hide`,
            `clear`,
            `clearSearchSuggestion`
        ]
    });
}
