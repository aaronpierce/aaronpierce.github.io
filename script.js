var editApp = new Vue({
	delimiters: ["?{", "}?"],
	el: '#section-01',
	data: {
		title: 'Animals',
		largeToggle: false,
		fontChange: false,
		hidden: false,
		fontColor: "Black",
		backgroundColor: '',
		range: 0,
		animals: [
			{text: 'Dog'},
			{text: 'Rabbit'},
			{text: 'Tiger'},
			{text: 'Cat'}
			]
	},
	methods: {
		addAnimal: function(){
			var input =  document.getElementById('animalForm');

			if (input.value !== ''){
				this.animals.push(
				{ text: input.value })

				input.value = '';
			}
		},
		delAnimal: function(index){
			this.animals.splice(index, 1);
		}
	},
	filters: {
		capitalize: function(value){
			if (!value) return '';
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		},
		undercase: function(value){
			if (!value) return '';
			value = value.toString();
			return value.toLowerCase();
		},
		url: function(value){
			if (!value) return '';
			value = value.toString();
			return "https://en.wikipedia.org/wiki/" + value
		}
	},
	computed: {
		styles: function(){
			return {
				color: this.fontColor,
				background: this.backgroundColor,
				'margin-bottom': this.range + "%"
			}
		}
	}
})