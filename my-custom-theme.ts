import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #538BED 
		"--color-primary-50": "229 238 252", // #e5eefc
		"--color-primary-100": "221 232 251", // #dde8fb
		"--color-primary-200": "212 226 251", // #d4e2fb
		"--color-primary-300": "186 209 248", // #bad1f8
		"--color-primary-400": "135 174 242", // #87aef2
		"--color-primary-500": "83 139 237", // #538BED
		"--color-primary-600": "75 125 213", // #4b7dd5
		"--color-primary-700": "62 104 178", // #3e68b2
		"--color-primary-800": "50 83 142", // #32538e
		"--color-primary-900": "41 68 116", // #294474
		// secondary | #B3BBC2 
		"--color-secondary-50": "244 245 246", // #f4f5f6
		"--color-secondary-100": "240 241 243", // #f0f1f3
		"--color-secondary-200": "236 238 240", // #eceef0
		"--color-secondary-300": "225 228 231", // #e1e4e7
		"--color-secondary-400": "202 207 212", // #cacfd4
		"--color-secondary-500": "179 187 194", // #B3BBC2
		"--color-secondary-600": "161 168 175", // #a1a8af
		"--color-secondary-700": "134 140 146", // #868c92
		"--color-secondary-800": "107 112 116", // #6b7074
		"--color-secondary-900": "88 92 95", // #585c5f
		// tertiary | #1b2845 
		"--color-tertiary-50": "221 223 227", // #dddfe3
		"--color-tertiary-100": "209 212 218", // #d1d4da
		"--color-tertiary-200": "198 201 209", // #c6c9d1
		"--color-tertiary-300": "164 169 181", // #a4a9b5
		"--color-tertiary-400": "95 105 125", // #5f697d
		"--color-tertiary-500": "27 40 69", // #1b2845
		"--color-tertiary-600": "24 36 62", // #18243e
		"--color-tertiary-700": "20 30 52", // #141e34
		"--color-tertiary-800": "16 24 41", // #101829
		"--color-tertiary-900": "13 20 34", // #0d1422
		// success | #15BD7F 
		"--color-success-50": "220 245 236", // #dcf5ec
		"--color-success-100": "208 242 229", // #d0f2e5
		"--color-success-200": "197 239 223", // #c5efdf
		"--color-success-300": "161 229 204", // #a1e5cc
		"--color-success-400": "91 209 165", // #5bd1a5
		"--color-success-500": "21 189 127", // #15BD7F
		"--color-success-600": "19 170 114", // #13aa72
		"--color-success-700": "16 142 95", // #108e5f
		"--color-success-800": "13 113 76", // #0d714c
		"--color-success-900": "10 93 62", // #0a5d3e
		// warning | #F1B35B 
		"--color-warning-50": "253 244 230", // #fdf4e6
		"--color-warning-100": "252 240 222", // #fcf0de
		"--color-warning-200": "252 236 214", // #fcecd6
		"--color-warning-300": "249 225 189", // #f9e1bd
		"--color-warning-400": "245 202 140", // #f5ca8c
		"--color-warning-500": "241 179 91", // #F1B35B
		"--color-warning-600": "217 161 82", // #d9a152
		"--color-warning-700": "181 134 68", // #b58644
		"--color-warning-800": "145 107 55", // #916b37
		"--color-warning-900": "118 88 45", // #76582d
		// error | #DC605C 
		"--color-error-50": "250 231 231", // #fae7e7
		"--color-error-100": "248 223 222", // #f8dfde
		"--color-error-200": "246 215 214", // #f6d7d6
		"--color-error-300": "241 191 190", // #f1bfbe
		"--color-error-400": "231 144 141", // #e7908d
		"--color-error-500": "220 96 92", // #DC605C
		"--color-error-600": "198 86 83", // #c65653
		"--color-error-700": "165 72 69", // #a54845
		"--color-error-800": "132 58 55", // #843a37
		"--color-error-900": "108 47 45", // #6c2f2d
		// surface | #E5E6E7 
		"--color-surface-50": "251 251 251", // #fbfbfb
		"--color-surface-100": "250 250 250", // #fafafa
		"--color-surface-200": "249 249 249", // #f9f9f9
		"--color-surface-300": "245 245 245", // #f5f5f5
		"--color-surface-400": "237 238 238", // #edeeee
		"--color-surface-500": "229 230 231", // #E5E6E7
		"--color-surface-600": "206 207 208", // #cecfd0
		"--color-surface-700": "172 173 173", // #acadad
		"--color-surface-800": "137 138 139", // #898a8b
		"--color-surface-900": "112 113 113", // #707171
		
	}
}