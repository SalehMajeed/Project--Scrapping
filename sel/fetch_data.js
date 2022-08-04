$(document).ready(function () {
	document.addEventListener('visibilitychange', function () {
		if (document.hidden) {
			console.log('Browser tab is hidden');
		} else {
			//location.reload(true);
			//window.location.reload(true);
			$.ajax({
				url: 'http://www.hrdkbullion.com/index.php/C_booking/get_commodity_data',
				type: 'GET',
				dataType: 'json',
				data: '',
				async: false,
				success: function (data) {
					if (data.commoditydetails.length > 0) {
						$('#liveratetable tbody').empty();
					}
					$.each(data.commoditydetails, function (idx, commodity) {
						if (commodity.prem_comsell_active == 1 || commodity.prem_combuy_active == 1) {
							if (commodity.com_sel_active == 1 || commodity.com_buy_active == 1) {
								var tablerow =
									'<tr id="liverates"><td>' +
									commodity.com_name +
									'</td><td class="table_data"></td><td style="display:none;">' +
									commodity.deliverydays +
									'</td><td style="display:none;"><div class="com_id">' +
									commodity.com_id +
									'</div><div class="com_type">' +
									commodity.com_type +
									'</div><div class="com_weight">' +
									commodity.com_weight +
									'</div><div class="com_other_charges">' +
									commodity.com_other_charges +
									'</div><div class="com_correction_type">' +
									commodity.com_correction_type +
									'</div><div class="com_sel_premium">' +
									commodity.com_sel_premium +
									'</div><div class="com_buy_premium">' +
									commodity.com_buy_premium +
									'</div><div class="com_premium_type">' +
									commodity.com_premium_type +
									'</div><div class="com_sel_active">' +
									commodity.com_sel_active +
									'</div><div class="com_buy_active">' +
									commodity.com_buy_active +
									'</div><div class="com_delverydays">' +
									commodity.com_delverydays +
									'</div><div class="com_isregion">' +
									commodity.com_isregion +
									'</div><div class="com_calpurity">' +
									commodity.com_calpurity +
									'</div><div class="com_tax">' +
									commodity.com_tax +
									'</div><div class="com_octroi">' +
									commodity.com_octroi +
									'</div><div class="com_stamduty">' +
									commodity.com_stamduty +
									'</div><div class="deliverydays">' +
									commodity.deliverydays +
									'</div><div class="displyname">' +
									commodity.displyname +
									'</div><div class="mcxsymbol">' +
									commodity.mcxsymbol +
									'</div><div class="banksymbol">' +
									commodity.banksymbol +
									'</div><div class="rcomid">' +
									commodity.rcomid +
									'</div><div class="trade_type">' +
									commodity.trade_type +
									'</div><div class="sell_diff">' +
									commodity.sell_diff +
									'</div><div class="buy_diff">' +
									commodity.buy_diff +
									'</div><div class="sell_rate">' +
									commodity.sell_rate +
									'</div><div class="com_display_purity">' +
									commodity.com_display_purity +
									'</div><div class="com_roundoff">' +
									commodity.com_roundoff +
									'</div><div class="com_is_coin">' +
									commodity.com_is_coin +
									'</div><div class="prem_comsell_active">' +
									commodity.prem_comsell_active +
									'</div><div class="prem_combuy_active">' +
									commodity.prem_combuy_active +
									'</div></td></tr>';
								$('#liveratetable tbody').append(tablerow);
							}
						}
					});
				},
				error: function (request, error) {
					console.log(error);
				},
			});
		}
	});
	var socket = io('http://69.16.196.54:3000/');
	try {
		socket.on('hrdkbuupdatecommodity:App\\Events\\HRDKBUCommodityUpdates', function (data) {
			var $ = jQuery.noConflict();
			rpanelcontract = data.updatedata.rpanel_contracts;
			if (data.updatedata.commodity != undefined) {
				if (data.updatedata.commodity.length > 0) {
					$('#liveratetable tbody').empty();
				}
				$.each(data.updatedata.commodity, function (idx, commodity) {
					console.log(commodity);
					if (commodity.prem_comsell_active == 1 || commodity.prem_combuy_active == 1) {
						if (commodity.com_sel_active == 1 || commodity.com_buy_active == 1) {
							var tablerow =
								'<tr id="liverates"><td>' +
								commodity.com_name +
								'</td><td class="table_data"></td><td style="display:none;">' +
								commodity.deliverydays +
								'</td><td style="display:none;"><div class="com_id">' +
								commodity.com_id +
								'</div><div class="com_type">' +
								commodity.com_type +
								'</div><div class="com_weight">' +
								commodity.com_weight +
								'</div><div class="com_other_charges">' +
								commodity.com_other_charges +
								'</div><div class="com_correction_type">' +
								commodity.com_correction_type +
								'</div><div class="com_sel_premium">' +
								commodity.com_sel_premium +
								'</div><div class="com_buy_premium">' +
								commodity.com_buy_premium +
								'</div><div class="com_premium_type">' +
								commodity.com_premium_type +
								'</div><div class="com_sel_active">' +
								commodity.com_sel_active +
								'</div><div class="com_buy_active">' +
								commodity.com_buy_active +
								'</div><div class="com_delverydays">' +
								commodity.com_delverydays +
								'</div><div class="com_isregion">' +
								commodity.com_isregion +
								'</div><div class="com_calpurity">' +
								commodity.com_calpurity +
								'</div><div class="com_tax">' +
								commodity.com_tax +
								'</div><div class="com_octroi">' +
								commodity.com_octroi +
								'</div><div class="com_stamduty">' +
								commodity.com_stamduty +
								'</div><div class="deliverydays">' +
								commodity.deliverydays +
								'</div><div class="displyname">' +
								commodity.displyname +
								'</div><div class="mcxsymbol">' +
								commodity.mcxsymbol +
								'</div><div class="banksymbol">' +
								commodity.banksymbol +
								'</div><div class="rcomid">' +
								commodity.rcomid +
								'</div><div class="trade_type">' +
								commodity.trade_type +
								'</div><div class="sell_diff">' +
								commodity.sell_diff +
								'</div><div class="buy_diff">' +
								commodity.buy_diff +
								'</div><div class="sell_rate">' +
								commodity.sell_rate +
								'</div><div class="com_display_purity">' +
								commodity.com_display_purity +
								'</div><div class="com_roundoff">' +
								commodity.com_roundoff +
								'</div><div class="com_is_coin">' +
								commodity.com_is_coin +
								'</div><div class="prem_comsell_active">' +
								commodity.prem_comsell_active +
								'</div><div class="prem_combuy_active">' +
								commodity.prem_combuy_active +
								'</div></td></tr>';
							$('#liveratetable tbody').append(tablerow);
						}
					}
				});
			} else {
				$('#liveratetable tbody').empty();
			}
		});
	} catch (err) {
		console.log(err);
	}
	socket.on('hrdkbuupdaterpanel:App\\Events\\HRDKBURpanelUpdates', function (data) {
		//var $ = jQuery.noConflict();
		rpanelbankrates = data.updatedata.rpanelbank;
		rpaneldata = data.updatedata.rpaneldata;
		rpanelcommodities = data.updatedata.rpanel_commodities;
		console.log(rpanelcommodities);
		$('.market_closed').html(data.updatedata.rpaneldata.market_status);
		$('.rate_display').html(data.updatedata.rpaneldata.rate_display);

		if (data.updatedata.rpaneldata.rate_display == 0) {
			//$("#onoffmessage").css
			document.getElementById('onoffmessage').style.display = 'block';
			document.getElementById('messagebox').style.display = 'none';
			document.getElementById('divrate').style.display = 'none';
		} else if (data.updatedata.rpaneldata.rate_display == 1 && data.updatedata.rpaneldata.market_status == 1) {
			document.getElementById('onoffmessage').style.display = 'none';
			document.getElementById('divrate').style.display = 'none';
			document.getElementById('messagebox').style.display = 'block';
			$('#messageboxtext').html(data.updatedata.rpaneldata.message);
		} else if (data.updatedata.rpaneldata.rate_display == 1 && data.updatedata.rpaneldata.market_status != 1) {
			document.getElementById('onoffmessage').style.display = 'none';
			document.getElementById('messagebox').style.display = 'none';
			document.getElementById('divrate').style.display = 'block';
		}
	});
	socket.on('hrdkbuupdatemarquee:App\\Events\\HRDKBUMarqueeUpdates', function (data) {
		//var $ = jQuery.noConflict();
		$('#marquee').html('');
		$('#marquee').append(
			"<marquee scrollamount='4' onmouseover='this.stop();' onmouseout='this.start();' >" +
				decodeURIComponent((data.updatedata.mrq_text + '').replace(/\+/g, '%20')) +
				'</marquee>'
		);
	});
	socket.on('hrdkbuupdatenews:App\\Events\\HRDKBUNewsUpdates', function (data) {
		//var $ = jQuery.noConflict();
		$('#newsevents').html('');
		$('#newsevents').append(
			'<marquee direction="up" onmouseover="this.stop();" onmouseout="this.start();" scrollamount="2" align="middle" style="height: 130px; padding-left: 2px;">' +
				data.updatedata.news +
				'</marquee>'
		);
	});
});
