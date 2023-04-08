$(document).ready(function () {

	// Tính tổng giá trị sản phẩm trong giỏ hàng
$(document).ready(function () {

	// Tính tổng giá trị sản phẩm trong giỏ hàng
	function calculateTotal() {
		var total = 0;
		$('.product').each(function (i, el) {
			var price = parseFloat($(el).find('.price').text().replace('$', ''));
			var quantity = parseInt($(el).find('.quantity').val());
			total += price * quantity;
		});
		$('.total-price').text('$' + total.toFixed(2));
	}
	
	// In tổng tiền ra html
	calculateTotal();
});



	$(".largeGrid").click(function () {
		$(this).find('a').addClass('active');
		$('.smallGrid a').removeClass('active');

		$('.product').addClass('large').each(function () {
		});
		setTimeout(function () {
			$('.info-large').show();
		}, 200);
		setTimeout(function () {

			$('.view_gallery').trigger("click");
		}, 400);

		return false;
	});

	$(".smallGrid").click(function () {
		$(this).find('a').addClass('active');
		$('.largeGrid a').removeClass('active');

		$('div.product').removeClass('large'); 
		$(".make3D").removeClass('animate');
		$('.info-large').fadeOut("fast");
		setTimeout(function () {
			$('div.flip-back').trigger("click");
		}, 400);
		return false;
	});

	$(".smallGrid").click(function () {
		$('.product').removeClass('large');
		return false;
	});

	$('.colors-large a').click(function () { return false; });


	$('.product').each(function (i, el) {

		// Lift card and show stats on Mouseover
		$(el).find('.make3D').hover(function () {
			$(this).parent().css('z-index', "20");
			$(this).addClass('animate');
			$(this).find('div.carouselNext, div.carouselPrev').addClass('visible');
		}, function () {
			$(this).removeClass('animate');
			$(this).parent().css('z-index', "1");
			$(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
		});

		// Flip card to the back side
		$(el).find('.view_gallery').click(function () {

			$(el).find('div.carouselNext, div.carouselPrev').removeClass('visible');
			$(el).find('.make3D').addClass('flip-10');
			/**
			* chức năng để làm cho 3D và xoay 90 độ ánh sáng trên đầu trang sản phẩm khi người dùng nhấp vào
			*/
			setTimeout(function () {
				$(el).find('.make3D').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo(80, 1, function () {
					$(el).find('.product-front, .product-front div.shadow').hide();
				});
			}, 50);

			/**
			* chức năng để hiển thị sản phẩm và quay lại và hiển thị bóng khi nhấp vào nút sản phẩm (s) trong 3
			*/
			setTimeout(function () {
				$(el).find('.make3D').removeClass('flip90').addClass('flip190');
				$(el).find('.product-back').show().find('div.shadow').show().fadeTo(90, 0);
				/**
				* chức năng để ẩn carousel 3D trên mouseover / zoom thay đổi tên lớp và chuyển sang 100ms trong
				*/
				setTimeout(function () {
					$(el).find('.make3D').removeClass('flip190').addClass('flip180').find('div.shadow').hide();
					/**
					* chức năng để hiển thị 3D cavema và thêm lớp vào next / prev cavema
					*/
					setTimeout(function () {
						$(el).find('.make3D').css('transition', '100ms ease-out');
						$(el).find('.cx, .cy').addClass('s1');
						setTimeout(function () { $(el).find('.cx, .cy').addClass('s2'); }, 100);
						setTimeout(function () { $(el).find('.cx, .cy').addClass('s3'); }, 200);
						$(el).find('div.carouselNext, div.carouselPrev').addClass('visible');
					}, 100);
				}, 100);
			}, 150);
		});

		// Flip card back to the front side
		/**
		* Chuyển lại và chuyển đổi các shader phía trước khi tải trang để làm cho chúng dễ đọc hơn.
		*/
		$(el).find('.flip-back').click(function () {

			$(el).find('.make3D').removeClass('flip180').addClass('flip190');
			/**
			* chức năng để làm cho 3D và vọt 90% của sản phẩm ánh sáng / tối / xám (vọt 190 vọt 90
			*/
			setTimeout(function () {
				$(el).find('.make3D<|END_interrupt|>
