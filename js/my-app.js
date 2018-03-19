var myApp = new Framework7({
	smartSelect: {
		pageTitle: 'Select Option',
		openIn: 'popup',
	  },
	  view: {
		iosDynamicNavbar: false,
		xhrCache: false,
	  }
});

var $$ = Dom7;





// var mainView = myApp.addView('.view-main', {
//     dynamicNavbar: true
// });
// var mainView = myApp.addView('.view-main', {
//     swipePanel: 'left'
// });
var view = myApp.views.create('.view-main', {
	url: '/'
  })

  

var smartSelect = myApp.smartSelect.create({ el:'.smart-select',
searchbar:true,
on: {
    opened: function () {
	  console.log('Smart select opened');
	  var $smart_select_el = $$('.smart-select-page').find('input[type=search]');
		$$(document).on('input',$smart_select_el,function(){
			// $$('.car').append('<option value="deewai">Deewai</option>')
			smartSelect.renderItem({text:'Deewai',value:'deewai',checkbox: false,className: "",disabled: false,id: 1521493459500,inputName: "radio-1521493459500",inputType: "radio",radio: true,selected: false},0);
			// myApp.smartSelect.addOption ('.smart-select', '<option value="deewai">Deewai</option>', 0)
		})
    }
  } })