$(document).ready(function(){
	
	const overlayOpenBtns = document.querySelectorAll('.overlay-action');
	const overlay = document.querySelector('.mobile-overlay');
	const asks = document.querySelectorAll('.ask__item');
	const body = document.querySelector('body');

	const bodyNoScroll = () => {
		body.classList.add('body-fixed');
	}
	const bodyScroll = () => {
		body.classList.remove('body-fixed');
	}
	const checkUpdateElemClass = (elem, className) =>{
			if(!elem.classList.contains(className)){
				elem.classList.add(className);
			}else{
				elem.classList.remove(className);
			}
	}

	
	overlayOpenBtns.forEach(item =>{
		item.addEventListener('click', (e) => {
			e.preventDefault();
			checkUpdateElemClass(overlay, 'mobile-overlay_show');
		});
	})

	asks.forEach(item => {
		item.addEventListener('click', ()=>{
		if (!item.classList.contains('ask__item_active')){
			asks.forEach(asksItem => {
				asksItem.classList.remove('ask__item_active');
			})
			item.classList.add('ask__item_active');
		}else{
			item.classList.remove('ask__item_active');
		}
		
		});
	});
	
	const munuParentItem = document.querySelectorAll('.mobile-menu__item-parent > .mobile-menu__link');
	const submenuCloseItem = document.querySelectorAll('.submenu-parent-link__arrow');
	const mobileMenu = document.querySelector('.mobile-menu');
	munuParentItem.forEach(item => {
		item.addEventListener('click', (e)=>{
			e.preventDefault();
			let sibling = item.nextElementSibling;
			
			
			sibling.classList.add('mobiler-menu__submenu_active');
			let siblingHeight = sibling.clientHeight;

			mobileMenu.style.height = siblingHeight + 'px';
			mobileMenu.style.overflow = 'hidden';
		})
	});

	submenuCloseItem.forEach(item =>{
		item.addEventListener('click', (e) =>{

			// пункт меню на уровень выше
			

			
			
			item.closest('.mobiler-menu__submenu_active').classList.remove('mobiler-menu__submenu_active');

			let dropdownUpper = item.closest('.mobiler-menu__submenu_active');
			if(dropdownUpper){
				mobileMenu.style.height = dropdownUpper.clientHeight + 'px';
			}else{
				mobileMenu.style.height = 'auto';
				mobileMenu.style.overflow = 'visible';
			}
			

		

		});
	})

	const triggerFilter = document.querySelector('.filter__trigger');
	const filterForm = document.querySelector('.filter__form');
	const filterFormClose = document.querySelector('.filter__form-close');

	if (triggerFilter && filterForm && filterFormClose){
		triggerFilter.addEventListener('click', ()=>{
			checkUpdateElemClass(triggerFilter, 'filter__trigger_active');
			checkUpdateElemClass(filterForm, 'filter__form_active');
			bodyNoScroll();
		});
	
		filterFormClose.addEventListener('click', () =>{
			checkUpdateElemClass(triggerFilter, 'filter__trigger_active');
			checkUpdateElemClass(filterForm, 'filter__form_active');
			bodyScroll();
		});
	}



	const scrollTop = document.querySelector('.scroll-top');
	const headerFixed = document.querySelector('.header-fixed');
	window.addEventListener('scroll', ()=>{
		if(window.pageYOffset > 500){
			if(!scrollTop.classList.contains('scroll-top_active')){
				scrollTop.classList.add('scroll-top_active');
			}

			if(!headerFixed.classList.contains('header-fixed_active')){
				headerFixed.classList.add('header-fixed_active');
			}

		}else{
			if(scrollTop.classList.contains('scroll-top_active')){
				scrollTop.classList.remove('scroll-top_active');
			}
			if(headerFixed.classList.contains('header-fixed_active')){
				headerFixed.classList.remove('header-fixed_active');
			}

		}
	})
	function slowScroll (id, padding) {
			let offset = padding;
			$('html, body').animate ({
				scrollTop: $(id).offset ().top - offset
			}, 100);
			return false;
	}

	scrollTop.addEventListener('click', ()=>{
		slowScroll('.wrapper');
	});


	

});
