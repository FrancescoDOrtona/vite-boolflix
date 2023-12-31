import { reactive } from 'vue'

export const store = reactive({
	searchText: '',
	movies: [],
	series: [],
	API_KEY: 'e99307154c6dfb0b4750f6603256716d',
	flags: {
		it: '/it.png',
		en: '/en.jpg',
		fr: '/fr.png',
		es: '/es.png',
        de: '/de.png',
        ca: '/ca.png',
        ja: '/jp.png',
        da: '/da.png',
        zh: '/zh.png',
        ko: '/ko.jpg',
        ro: '/ro.png',
        kn: '/kn.png',
        ru: '/ru.png',
        hi: '/hi.png'
	},
})