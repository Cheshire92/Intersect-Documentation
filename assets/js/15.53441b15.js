(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{228:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Get an authorization token for api requests that require auth.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("ul",[s("li",[t._v("The grant type to receive an auth token is 'password'.")]),t._v(" "),s("li",[t._v("Password must be a SHA256 hash of the user's password, with hyphens removed.")]),t._v(" "),s("li",[t._v("You can generate a SHA256 hash of a plaintext password "),s("a",{attrs:{href:"https://passwordsgenerator.net/sha256-hash-generator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("hr"),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),s("p",[t._v("Refreshes an existing token delaying it's expiration.")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),s("hr"),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),s("p",[t._v("Deletes the token associated with a given authorization header.")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),s("hr"),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._m(52),t._v(" "),s("p",[t._v("Deletes an authorization token preventing further use.")]),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),s("hr"),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[this._v("#")]),this._v(" Authentication")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"get-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-token"}},[this._v("#")]),this._v(" Get Token")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[this._v("#")]),this._v(" Request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("URL")]),this._v(" : "),e("code",[this._v("/api/oauth/token")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Method")]),this._v(" : "),e("code",[this._v("POST")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Authorization Required")]),this._v(" : "),e("code",[this._v("No")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Content Type")]),this._v(" : "),e("code",[this._v("application/json")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Body")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("grant_type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Auth Type.")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Username of API Authorized Account")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("SHA256 Hash of Account Password")]),t._v(" "),s("td",[t._v("✔️")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Notes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[this._v("#")]),this._v(" Response")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Condition")]),this._v(" : If authentication was successful and token was generated.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Code")]),this._v(" : "),e("code",[this._v("200 SUCCESS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("299")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"efd947fe-a874-4259-9b06-41a8a9505e35"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".issued"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mon, 29 Jul 2019 19:52:04 GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".expires"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mon, 29 Jul 2019 19:57:04 GMT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[this._v("#")]),this._v(" Notes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The refresh_token is the token's id, it is used to refresh or delete the token using the routes below.")]),this._v(" "),e("li",[this._v("For all requests that require authentication you will need to supply the access token within the request header. The proper format can found below.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Header")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("authorization")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Bearer [access_token]")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"refresh-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refresh-token"}},[this._v("#")]),this._v(" Refresh Token")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[this._v("#")]),this._v(" Request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("URL")]),this._v(" : "),e("code",[this._v("/api/oauth/token")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Method")]),this._v(" : "),e("code",[this._v("POST")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Authorization Required")]),this._v(" : "),e("code",[this._v("Yes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Content Type")]),this._v(" : "),e("code",[this._v("application/json")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Body")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("grant_type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Auth Type.")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("refresh_token")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Refresh Token Id")]),t._v(" "),s("td",[t._v("✔️")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"efd947fe-a874-4259-9b06-41a8a9505e35"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Notes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The grant type should be 'refresh_token'.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[this._v("#")]),this._v(" Response")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Condition")]),this._v(" : Token Refreshed")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Code")]),this._v(" : "),e("code",[this._v("200 SUCCESS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3OSlfC8yg_fcSGdAGa9n63mDnvwfVhSOo1lgdj0-q4l2EsFvZ1nbZYVoqJd27TI4ksZALxJbzpwcvDHJwg8Frmvlvys-VHE0TLSNK-_o7YvgT2TA3BIASI2nQdA6dx_LIuB5LJhQpIWrlypCpEgP_FRtDfGevUEVpskTP7wB0VDw02RsVaNW19qKWMNwdqU07KxvtY-ghWquMVw1UQfR5LQTbt48b-e741CeFSa1zCD7Zt3UCjaG5NYt7YawOnS-qsA0dL3fCNhQbhjVVe2UZ613JledeiZowKmoIMPqxH9wuTbSvMOqx-YRH2GItVIzk5EfV-gnpZvFUlAtpZjmQqsxUlWX0CWpvpT6Vcr4NMnNCB8MhSuOjNBDQBkA5Z7QVxgEuywa3lyYDuWnD6OpystzuyTWnF3ETzgb8DfgmbGu_VxpdpBgufq9yeVE0KPh8XaIEVkICDIzJCArmPWgrgHr_AXnsl-OwBL-VoNgs7j6BlN_jHQ_Wd6A5LoJU_mv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("299")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e27a8020-f9bb-419b-8a06-5421a1452a78"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".issued"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Thu, 01 Aug 2019 19:44:09 GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".expires"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Thu, 01 Aug 2019 19:49:09 GMT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"delete-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-token"}},[this._v("#")]),this._v(" Delete Token")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[this._v("#")]),this._v(" Request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("URL")]),this._v(" : "),e("code",[this._v("/api/oauth/token/[username]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Method")]),this._v(" : "),e("code",[this._v("DELETE")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Authorization Required")]),this._v(" : "),e("code",[this._v("Yes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Body")]),this._v(" : "),e("code",[this._v("None")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Notes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The tokenId within the request url is returned as the 'refresh_token' in the Get Token and Refresh Token responses.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[this._v("#")]),this._v(" Response")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Condition")]),this._v(" : Token Deleted")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Code")]),this._v(" : "),e("code",[this._v("200 SUCCESS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"delete-token-by-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-token-by-id"}},[this._v("#")]),this._v(" Delete Token By Id")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"request-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[this._v("#")]),this._v(" Request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("URL")]),this._v(" : "),e("code",[this._v("/api/oauth/token/[username]/[tokenId]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Method")]),this._v(" : "),e("code",[this._v("DELETE")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Authorization Required")]),this._v(" : "),e("code",[this._v("No")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Body")]),this._v(" : "),e("code",[this._v("None")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Notes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The tokenId within the request url is returned as the 'refresh_token' in the Get Token and Refresh Token responses.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[this._v("#")]),this._v(" Response")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Condition")]),this._v(" : Token Deleted")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Code")]),this._v(" : "),e("code",[this._v("200 SUCCESS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tokenId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c7edff1c-ef0a-47e5-ba5f-a08b169c411e"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);