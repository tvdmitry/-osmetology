$(document).ready(function(){
	$('.main-slider').slick({
		slidesToShow: 1,
		infinite: true,
		dots: true,
		autoplay: false,
 		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
	})

	$('.main-slider-seminar').slick({
		slidesToShow: 2,
		infinite: false,
		dots: false,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 970,
				settings: {
					slidesToShow: 1.5,
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1.5,
					variableWidth: true
				}
			}
		]
	})

	$('.main-slider').on('afterChange', function(){
		fillingLine();
	});

	$('.main-slider-seminar').on('afterChange', function(){
		fillingLine();
	});

	function fillingLine(){
		let allLine = document.querySelectorAll('.main-slider .slick-dots li');

		allLine.forEach(function(item){
			let itemLine = item.querySelector('i');
			if(itemLine){
				itemLine.remove();
			}
			
		})

		let currentLine = document.querySelector('.main-slider li.slick-active');
		let accentLine = document.createElement('i');

		currentLine.appendChild(accentLine);

		let accentLineWidth = 0;

		let interval =	setInterval(function(){
				accentLineWidth += 1;
				accentLine.style.width = accentLineWidth + '%';
				if(accentLineWidth >= 100){
					clearInterval(interval);
				}

			}, 30)
	}

	function fillingLineTwo(){
		let allLineTwo = document.querySelectorAll('.main-slider-seminar .slick-dots li');

		allLineTwo.forEach(function(item){
			let itemLine = item.querySelector('i');
			if(itemLine){
				itemLine.remove();
			}
		})

		let currentLineTwo = document.querySelector('.main-slider-seminar li.slick-active');
		let accentLineTwo = document.createElement('i');

		currentLineTwo.appendChild(accentLineTwo);

		let accentLineWidthTwo = 0;


		let intervalTwo =	setInterval(function(){
			accentLineWidthTwo += 1;
			allLineTwo.style.width = accentLineWidthTwo + '%';
			if(accentLineWidthTwo >= 100){
				clearInterval(intervalTwo);
			}

		}, 30)


	}

	function interviewNext(){
		let allbtnNext = document.querySelectorAll('.next-interview');
		allbtnNext.forEach(item => {
			item.addEventListener('click',function(e){
				let parent = item.closest('.interview__item');
				let nextItem = parent.nextElementSibling;
				
				if(nextItem){
					nextItem.classList.add('interview__item--active');
					parent.classList.remove('interview__item--active');
				}
			})
		})
	}
	function interviewPrev(){
		let allbtnPrev = document.querySelectorAll('.interview__arrow');
		allbtnPrev.forEach(item => {
			item.addEventListener('click',function(e){
				let parent = item.closest('.interview__item');
				let prevItem = parent.previousElementSibling;
				if(prevItem){
					prevItem.classList.add('interview__item--active');
					parent.classList.remove('interview__item--active');
				}
			})
		})
	}

	function interviewTabs(){
		let allTabs = document.querySelectorAll('.interview__tabs-item');
		let allInterview = document.querySelectorAll('.interview__item');

		allTabs.forEach(item =>{
			item.addEventListener('click', function(){
				let tabDataId = item.getAttribute('data-id');
				allInterview.forEach(interviewItem =>{
					let interviewItemDataId = interviewItem.getAttribute('data-id');
					if(tabDataId == interviewItemDataId){
						interviewItem.classList.add('interview__item--active');
					}else{
						interviewItem.classList.remove('interview__item--active');
					}
				})
			})
		})

	}

	class ItcAccordion {
		constructor(target, config) {
			this._el = typeof target === 'string' ? document.querySelector(target) : target;
			const defaultConfig = {
				alwaysOpen: true,
				duration: 350
			};
			this._config = Object.assign(defaultConfig, config);
			this.addEventListener();
		}
		addEventListener() {
			this._el.addEventListener('click', (e) => {
				const elHeader = e.target.closest('.accordion__header');
				if (!elHeader) {
					return;
				}
				if (!this._config.alwaysOpen) {
					const elOpenItem = this._el.querySelector('.accordion__item_show');
					if (elOpenItem) {
						elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
					}
				}
				this.toggle(elHeader.parentElement);
			});
		}
		show(el) {
			const elBody = el.querySelector('.accordion__body');
			if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
				return;
			}
			el.querySelector('.toggle-icon').innerText = '-';

			elBody.style['display'] = 'block';
			const height = elBody.offsetHeight;
			elBody.style['height'] = 0;
			elBody.style['overflow'] = 'hidden';
			elBody.style['transition'] = `height ${this._config.duration}ms ease`;
			elBody.classList.add('collapsing');
			el.classList.add('accordion__item_slidedown');
			elBody.offsetHeight;
			elBody.style['height'] = `${height}px`;
			window.setTimeout(() => {
				elBody.classList.remove('collapsing');
				el.classList.remove('accordion__item_slidedown');
				elBody.classList.add('collapse');
				el.classList.add('accordion__item_show');
				elBody.style['display'] = '';
				elBody.style['height'] = '';
				elBody.style['transition'] = '';
				elBody.style['overflow'] = '';
			}, this._config.duration);
		}
		hide(el) {
			const elBody = el.querySelector('.accordion__body');
			if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
				return;
			}

			el.querySelector('.toggle-icon').innerText = '+';

			elBody.style['height'] = `${elBody.offsetHeight}px`;
			elBody.offsetHeight;
			elBody.style['display'] = 'block';
			elBody.style['height'] = 0;
			elBody.style['overflow'] = 'hidden';
			elBody.style['transition'] = `height ${this._config.duration}ms ease`;
			elBody.classList.remove('collapse');
			el.classList.remove('accordion__item_show');
			elBody.classList.add('collapsing');
			window.setTimeout(() => {
				elBody.classList.remove('collapsing');
				elBody.classList.add('collapse');
				elBody.style['display'] = '';
				elBody.style['height'] = '';
				elBody.style['transition'] = '';
				elBody.style['overflow'] = '';
			}, this._config.duration);
		}
		toggle(el) {
			el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
		}
	}

	new ItcAccordion(document.querySelector('.accordion'), {
		alwaysOpen: true
	});
	interviewNext();
	interviewPrev();
	interviewTabs();
	fillingLine();
	fillingLineTwo();
});