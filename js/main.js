$(document).ready(function(){$(".owl-carousel").owlCarousel({nav:!1,dots:!0,responsive:{0:{loop:!0,items:1},600:{margin:10,loop:!0,items:2},1e3:{dots:!1,margin:10,loop:!1,items:3,mouseDrag:!1,touchDrag:!1,pullDrag:!1}}}),$(window).scroll(function(){$("header").css("background-position","50% "+-$(this).scrollTop()/2+"px")}),$(".table-container-footer .btn-pink").each(function(t,e){var i=t+2;$(this).hover(function(){$(".table-container-body tr td:nth-of-type("+i+")").css({"background-color":"rgba(68,125,152,.07)",transition:"all 0.3s ease-in"})},function(){$(".table-container-body tr td:nth-of-type("+i+")").css({"background-color":"transparent",transition:"all 0.3s ease-in"})}).click(function(){$(".table-container-body tr td").each(function(){$(this).hasClass("clicked")&&$(this).removeClass("clicked")}),$(".table-container-body tr td:nth-of-type("+i+")").addClass("clicked")})}),wrapper=$(".tabs"),tabs=wrapper.find(".tab"),tabToggle=wrapper.find(".tab-toggle"),tabToggle.on("click",function(){var t=$(this).parent().next(".content"),e=wrapper.find(".active");$(this).hasClass("active")||($(this).add(t).add(e).toggleClass("active"),wrapper.css("min-height","400px"))}),tabToggle.first().trigger("click"),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$("select").selectric()}),$("#myModal").on("shown.bs.modal",function(){}),$("#menu").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),i=$(e).offset().top;$("body,html").animate({scrollTop:i},1500)}),$("#callback-form").submit(function(){return null!==$("#Phone").val().match(/(?:\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[34569]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/)?$.ajax({type:"POST",url:"mail.php",data:$("#callback-form").serialize()}).done(function(){$(".modal").modal("toggle"),setTimeout(function(){$("#myModal2").fadeIn()},700)}):$("#errorMessage").css("display","block"),!1}),$("#open-close").show(),$(".wrap-alert").show(),$("#open-close").click(function(t){t.preventDefault(),$(".wrap-alert").slideToggle()});var t=$(".table-container-body"),e=$(".table-container-header"),i=$(".table-container-footer"),n=function(){var t,e,i=$("<p/>").addClass("fixed-table-scroll-inner"),n=$("<div/>").addClass("fixed-table-scroll-outer");return n.append(i),$("body").append(n),t=i[0].offsetWidth,n.css("overflow","scroll"),e=i[0].offsetWidth,t===e&&(e=n[0].clientWidth),n.remove(),t-e}();t.on("scroll",function(){e.scrollLeft($(this).scrollLeft()),i.scrollLeft($(this).scrollLeft())});var o=function(){var o=t.find("> table > tbody > tr:first-child > td");o.each(function(t){var a=$(this).innerWidth(),l=o.length-1==t?n:0;lastHeader=e.find("th:eq("+t+")").innerWidth(a+l),lastFooter=i.find("th:eq("+t+")").innerWidth(a+l)})};t.find("> table > tbody > tr > td").click(function(e){t.find("> table > tbody > tr").removeClass("info"),$(e.target).parent().addClass("info")}),$(window).resize(o),o();var a=[{price:allOptions.main.light.price},{price:allOptions.main.medium.price},{price:allOptions.main.premium.price}];$(".table-container-footer .price").each(function(t){$(this).text("$"+a[t].price)}),$(".tab-content .price").each(function(t){$(this).find("p").text("$"+a[t].price)});var l,r,c=$("input[type=checkbox]"),s=0,d=0,p=0,f=0;$('[id="light"]').click(function(){s=allOptions.main.light.price,p=allOptions.main.light.time,c.removeAttr("disabled"),c.change()}),$('[id="medium"]').click(function(){s=allOptions.main.medium.price,p=allOptions.main.medium.time,c.removeAttr("disabled"),c.change()}),$('[id="premium"]').click(function(){s=allOptions.main.premium.price,p=allOptions.main.premium.time,c.removeAttr("disabled"),c.change()}),c.change(function(){d=0,f=0,$("input[type=checkbox]").each(function(){this.checked&&(d+=allOptions.options[this.id].price,f+=allOptions.options[this.id].time)}),l=parseInt(s)+parseInt(d),r=parseInt(p)+parseInt(f),function(t,e){$("#totalPrice").html("$"+t);var i="месяца";1==e?i="месяц":e>4&&(i="месяцев"),$("#totalTime").html(e+" "+i)}(l,r)}),$("#cost, #feature, #why-us, #promotion").animated("slideInUp","slideOutUp"),$(".options, .wrap-cost, .home-button").animated("slideInUp","slideOutUp")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvd2xDYXJvdXNlbCIsIm5hdiIsImRvdHMiLCJyZXNwb25zaXZlIiwiMCIsImxvb3AiLCJpdGVtcyIsIjYwMCIsIm1hcmdpbiIsIjEwMDAiLCJtb3VzZURyYWciLCJ0b3VjaERyYWciLCJwdWxsRHJhZyIsIndpbmRvdyIsInNjcm9sbCIsImNzcyIsInRoaXMiLCJzY3JvbGxUb3AiLCJlYWNoIiwiaW5kZXgiLCJlbGVtIiwiZWxlbUluZGV4IiwiaG92ZXIiLCJiYWNrZ3JvdW5kLWNvbG9yIiwidHJhbnNpdGlvbiIsImNsaWNrIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwid3JhcHBlciIsInRhYnMiLCJmaW5kIiwidGFiVG9nZ2xlIiwib24iLCJjb250ZW50IiwicGFyZW50IiwibmV4dCIsImFjdGl2ZUl0ZW1zIiwiYWRkIiwidG9nZ2xlQ2xhc3MiLCJmaXJzdCIsInRyaWdnZXIiLCJ0b29sdGlwIiwic2VsZWN0cmljIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiYXR0ciIsInRvcCIsIm9mZnNldCIsImFuaW1hdGUiLCJzdWJtaXQiLCJ2YWwiLCJtYXRjaCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInNlcmlhbGl6ZSIsImRvbmUiLCJtb2RhbCIsInNldFRpbWVvdXQiLCJmYWRlSW4iLCJzaG93Iiwic2xpZGVUb2dnbGUiLCIkYm9keSIsIiRoZWFkZXIiLCIkZm9vdGVyIiwic2Nyb2xsQmFyV2lkdGgiLCJ3MSIsIncyIiwiaW5uZXIiLCJvdXRlciIsImFwcGVuZCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmUiLCJzY3JvbGxMZWZ0IiwicmVkcmF3IiwidGRzIiwiaSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImxhc3RQYWRkaW5nIiwibGVuZ3RoIiwibGFzdEhlYWRlciIsImxhc3RGb290ZXIiLCJlIiwidGFyZ2V0IiwicmVzaXplIiwibWFzUHJpY2UiLCJwcmljZSIsImFsbE9wdGlvbnMiLCJtYWluIiwibGlnaHQiLCJtZWRpdW0iLCJwcmVtaXVtIiwidGV4dCIsInRvdGFsUHJpY2UiLCJ0b3RhbFRpbWUiLCJjaGVja0JveGVzIiwiYmFzZVByaWNlIiwib3B0aW9uc1ByaWNlIiwiYmFzZVRpbWUiLCJvcHRpb25zVGltZSIsInRpbWUiLCJyZW1vdmVBdHRyIiwiY2hhbmdlIiwiY2hlY2tlZCIsInBhcnNlSW50IiwiaHRtbCIsInVwZGF0ZVRvdGFsUHJpY2VhbmRUaW1lIiwiYW5pbWF0ZWQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFHQyxVQUFXQyxNQUFNLFdBRWhCRixFQUFFLGlCQUFpQkcsYUFDZkMsS0FBSyxFQUNMQyxNQUFNLEVBQ05DLFlBQ0lDLEdBQ0lDLE1BQU0sRUFDTkMsTUFBTyxHQUVYQyxLQUNJQyxPQUFRLEdBQ1JILE1BQU0sRUFDTkMsTUFBTyxHQUVYRyxLQUNJUCxNQUFNLEVBQ05NLE9BQVEsR0FDUkgsTUFBTSxFQUNOQyxNQUFPLEVBQ1BJLFdBQVcsRUFDWEMsV0FBVyxFQUNYQyxVQUFVLE1BTXRCZixFQUFFZ0IsUUFBUUMsT0FBTyxXQUNiakIsRUFBRSxVQUFVa0IsSUFBSSxzQkFBc0IsUUFBV2xCLEVBQUVtQixNQUFNQyxZQUFjLEVBQUssUUFNaEZwQixFQUFFLHFDQUFxQ3FCLEtBQUssU0FBVUMsRUFBT0MsR0FDekQsSUFBSUMsRUFBWUYsRUFBUSxFQUNadEIsRUFBRW1CLE1BQ1JNLE1BQU0sV0FDUnpCLEVBQUUsMkNBQTZDd0IsRUFBWSxLQUFLTixLQUFLUSxtQkFBb0IsdUJBQXlCQyxXQUFjLHNCQUNsSSxXQUNFM0IsRUFBRSwyQ0FBNkN3QixFQUFZLEtBQUtOLEtBQUtRLG1CQUFvQixjQUFnQkMsV0FBYyx1QkFDeEhDLE1BQU0sV0FDTDVCLEVBQUUsK0JBQStCcUIsS0FBSyxXQUMvQnJCLEVBQUVtQixNQUFNVSxTQUFVLFlBQWE3QixFQUFFbUIsTUFBTVcsWUFBWSxhQUcxRDlCLEVBQUUsMkNB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TCxHQU9oRCxTQUFpQ04sRUFBV0MsR0FDeEN0RyxFQUFFLGVBQWVpSCxLQUFLLElBQUlaLEdBQzFCLElBQUlPLEVBQU8sU0FDSyxHQUFiTixFQUNDTSxFQUFPLFFBQ0ZOLEVBQVUsSUFDZk0sRUFBTyxXQUVYNUcsRUFBRSxjQUFjaUgsS0FBS1gsRUFBVSxJQUFJTSxHQWJuQ00sQ0FBd0JiLEVBQVdDLEtBcUJ2Q3RHLEVBQUUsd0NBQXdDbUgsU0FBUyxZQUFhLGNBQ2hFbkgsRUFBRSxzQ0FBc0NtSCxTQUFTLFlBQWEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vLS0tLS0tLS0tLS0tT1dMXHJcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOntcclxuICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNjAwOntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwMDp7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgbW91c2VEcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvdWNoRHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwdWxsRHJhZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS1QQVJBTExBWFxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImhlYWRlclwiKS5jc3MoXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXCI1MCUgXCIgKyAoLSQodGhpcykuc2Nyb2xsVG9wKCkgLyAyKSArIFwicHhcIik7XHJcbiAgICB9KTtcclxuLy8tLS0tLS0tLS0tLS1FTkQgUEFSQUxMQVhcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tIEhPVkVSIEJVVFRPTlxyXG4gICAgJChcIi50YWJsZS1jb250YWluZXItZm9vdGVyIC5idG4tcGlua1wiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbSkge1xyXG4gICAgICAgIHZhciBlbGVtSW5kZXggPSBpbmRleCArIDI7XHJcbiAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBfdGhpcy5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKFwiLnRhYmxlLWNvbnRhaW5lci1ib2R5IHRyIHRkOm50aC1vZi10eXBlKFwiICsgZWxlbUluZGV4ICsgXCIpXCIpLmNzcyh7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSg2OCwxMjUsMTUyLC4wNylcIiwgIFwidHJhbnNpdGlvblwiOiBcImFsbCAwLjNzIGVhc2UtaW5cIn0pO1xyXG4gICAgICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIi50YWJsZS1jb250YWluZXItYm9keSB0ciB0ZDpudGgtb2YtdHlwZShcIiArIGVsZW1JbmRleCArIFwiKVwiKS5jc3Moe1wiYmFja2dyb3VuZC1jb2xvclwiOiBcInRyYW5zcGFyZW50XCIsICBcInRyYW5zaXRpb25cIjogXCJhbGwgMC4zcyBlYXNlLWluXCJ9KTtcclxuICAgICAgICB9KS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIudGFibGUtY29udGFpbmVyLWJvZHkgdHIgdGRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCBcImNsaWNrZWRcIiApKSAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xpY2tlZFwiKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIudGFibGUtY29udGFpbmVyLWJvZHkgdHIgdGQ6bnRoLW9mLXR5cGUoXCIgKyBlbGVtSW5kZXggKyBcIilcIikuYWRkQ2xhc3MoXCJjbGlja2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS1UQUJTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tIFZhcmlhYmxlc1xyXG5cclxuICAgIHdyYXBwZXIgICA9ICQoXCIudGFic1wiKTtcclxuICAgIHRhYnMgICAgICA9IHdyYXBwZXIuZmluZChcIi50YWJcIik7XHJcbiAgICB0YWJUb2dnbGUgPSB3cmFwcGVyLmZpbmQoXCIudGFiLXRvZ2dsZVwiKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tIEZ1bmN0aW9uc1xyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5UYWIoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgICAgID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KFwiLmNvbnRlbnRcIiksXHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW1zID0gd3JhcHBlci5maW5kKFwiLmFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkKGNvbnRlbnQpLmFkZChhY3RpdmVJdGVtcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNzcygnbWluLWhlaWdodCcsICc0MDBweCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0gSW50ZXJhY3Rpb25zXHJcblxyXG4gICAgdGFiVG9nZ2xlLm9uKCdjbGljaycsIG9wZW5UYWIpO1xyXG5cclxuICAgIHRhYlRvZ2dsZS5maXJzdCgpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLSBDb25zdHJ1Y3RvciBmdW5jdGlvbnNcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS1FTkQgVEFCU1xyXG5cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cmljKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4vL9C+0YLQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICAgICQoJyNteU1vZGFsJykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICQoJyNteUlucHV0JykuZm9jdXMoKVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbi8v0L/Qu9Cw0LLRi9C5INGB0LrRgNC+0LvQu1xyXG4gICAgJChcIiNtZW51XCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDE1MDApO1xyXG4gICAgfSk7XHJcblxyXG4vL9CQ0Y/QutGBINC+0YLQv9GA0LDQstC60LAg0YTQvtGA0LxcclxuXHJcblxyXG4gICAgLy/QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9qcXVlcnkuYWpheC9cclxuICAgICQoXCIjY2FsbGJhY2stZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHN0ciA9ICAgJChcIiNQaG9uZVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgZm91bmQgPSBzdHIubWF0Y2goLyg/OlxcdykoPzooPzooPzooPzpcXCs/Myk/OFxcV3swLDV9KT8wXFxXezAsNX0pP1szNDU2OV1cXHM/XFxkW15cXHcsOyhcXCtdezAsNX0pP1xcZFxcV3swLDV9XFxkXFxXezAsNX1cXGRcXFd7MCw1fVxcZFxcV3swLDV9XFxkXFxXezAsNX1cXGRcXFd7MCw1fVxcZCg/IShcXFc/XFxkKSkvKVxyXG5cclxuICAgICAgICBpZiAoZm91bmQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIm1haWwucGhwXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAkKFwiI2NhbGxiYWNrLWZvcm1cIikuc2VyaWFsaXplKClcclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9hbGVydChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAkKCcjYWxlcnQnKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAvLyAkKFwiI215TW9kYWwyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNteU1vZGFsMicpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgfSwgNzAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjZXJyb3JNZXNzYWdlJykuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcjb3Blbi1jbG9zZScpLnNob3coKTtcclxuICAgICQoJy53cmFwLWFsZXJ0Jykuc2hvdygpO1xyXG5cclxuICAgICQoJyNvcGVuLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQlNC70Y8g0YLQvtCz0L4g0YfRgtC+0LHRiyDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDRgdGB0YvQu9C60YMg0L3QtSDQutC40LTQsNC70L4g0LLQstC10YDRhVxyXG4gICAgICAgICQoJy53cmFwLWFsZXJ0Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1RBQkxFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgJGJvZHkgPSAkKFwiLnRhYmxlLWNvbnRhaW5lci1ib2R5XCIpLFxyXG4gICAgICAgICRoZWFkZXIgPSAkKFwiLnRhYmxlLWNvbnRhaW5lci1oZWFkZXJcIiksXHJcbiAgICAgICAgJGZvb3RlciA9ICQoXCIudGFibGUtY29udGFpbmVyLWZvb3RlclwiKTtcclxuXHJcbi8vIEdldCBTY3JvbGxCYXIgd2lkdGgoRnJvbTogaHR0cDovL2Jvb3RzdHJhcC10YWJsZS53ZW56aGl4aW4ubmV0LmNuLylcclxuICAgIHZhciBzY3JvbGxCYXJXaWR0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlubmVyID0gJCgnPHAvPicpLmFkZENsYXNzKCdmaXhlZC10YWJsZS1zY3JvbGwtaW5uZXInKSxcclxuICAgICAgICAgICAgb3V0ZXIgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnZml4ZWQtdGFibGUtc2Nyb2xsLW91dGVyJyksXHJcbiAgICAgICAgICAgIHcxLCB3MjtcclxuICAgICAgICBvdXRlci5hcHBlbmQoaW5uZXIpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQob3V0ZXIpO1xyXG4gICAgICAgIHcxID0gaW5uZXJbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgb3V0ZXIuY3NzKCdvdmVyZmxvdycsICdzY3JvbGwnKTtcclxuICAgICAgICB3MiA9IGlubmVyWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGlmICh3MSA9PT0gdzIpIHtcclxuICAgICAgICAgICAgdzIgPSBvdXRlclswXS5jbGllbnRXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0ZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgcmV0dXJuIHcxIC0gdzI7XHJcbiAgICB9KSgpO1xyXG5cclxuLy8gU2Nyb2xsIGhvcml6b250YWxcclxuICAgICRib2R5Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGhlYWRlci5zY3JvbGxMZWZ0KCQodGhpcykuc2Nyb2xsTGVmdCgpKTtcclxuICAgICAgICAkZm9vdGVyLnNjcm9sbExlZnQoJCh0aGlzKS5zY3JvbGxMZWZ0KCkpO1xyXG4gICAgfSk7XHJcblxyXG4vLyBSZWRyYXcgSGVhZGVyL0Zvb3RlclxyXG4gICAgdmFyIHJlZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0ZHMgPSAkYm9keS5maW5kKFwiPiB0YWJsZSA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZFwiKTtcclxuICAgICAgICB0ZHMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSAkKHRoaXMpLmlubmVyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgIGxhc3RQYWRkaW5nID0gKHRkcy5sZW5ndGggLTEgPT0gaSA/IHNjcm9sbEJhcldpZHRoIDogMCk7XHJcbiAgICAgICAgICAgIGxhc3RIZWFkZXIgPSAkaGVhZGVyLmZpbmQoXCJ0aDplcShcIitpK1wiKVwiKS5pbm5lcldpZHRoKHdpZHRoICsgbGFzdFBhZGRpbmcpO1xyXG4gICAgICAgICAgICBsYXN0Rm9vdGVyID0gJGZvb3Rlci5maW5kKFwidGg6ZXEoXCIraStcIilcIikuaW5uZXJXaWR0aCh3aWR0aCArIGxhc3RQYWRkaW5nKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4vLyBTZWxlY3Rpb25cclxuICAgICRib2R5LmZpbmQoXCI+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkYm9keS5maW5kKFwiPiB0YWJsZSA+IHRib2R5ID4gdHJcIikucmVtb3ZlQ2xhc3MoXCJpbmZvXCIpO1xyXG4gICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKCdpbmZvJyk7XHJcbiAgICB9KTtcclxuXHJcbi8vIExpc3RlbiB0byBSZXNpemUgV2luZG93XHJcbiAgICAkKHdpbmRvdykucmVzaXplKHJlZHJhdyk7XHJcbiAgICByZWRyYXcoKTtcclxuXHJcbiAgICAvL0VORCBUQUJMRS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gSW5zZXJ0IHByaWNlIGludG8gbGFiZWxzXHJcbiAgICB2YXIgbWFzUHJpY2UgPSBbXHJcbiAgICAgICAge3ByaWNlOiBhbGxPcHRpb25zLm1haW4ubGlnaHQucHJpY2V9LFxyXG4gICAgICAgIHtwcmljZTogYWxsT3B0aW9ucy5tYWluLm1lZGl1bS5wcmljZX0sXHJcbiAgICAgICAge3ByaWNlOiBhbGxPcHRpb25zLm1haW4ucHJlbWl1bS5wcmljZX1cclxuICAgIF07XHJcblxyXG4gICAgJChcIi50YWJsZS1jb250YWluZXItZm9vdGVyIC5wcmljZVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICQodGhpcykudGV4dCgnJCcrIG1hc1ByaWNlW2luZGV4XS5wcmljZSk7XHJcbiAgICB9KTtcclxuICAgICQoXCIudGFiLWNvbnRlbnQgLnByaWNlXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdwJykudGV4dCgnJCcrIG1hc1ByaWNlW2luZGV4XS5wcmljZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGluZyB0b3RhbCBwcmljZSBhbmQgdG90YWwgdGltZTpcclxuICAgIHZhciBjaGVja0JveGVzID0gICQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcblxyXG4gICAgdmFyIHRvdGFsUHJpY2U7XHJcbiAgICB2YXIgYmFzZVByaWNlICAgID0gMCA7XHJcbiAgICB2YXIgb3B0aW9uc1ByaWNlID0gMCA7XHJcblxyXG4gICAgdmFyIHRvdGFsVGltZTtcclxuICAgIHZhciBiYXNlVGltZSAgICA9IDAgO1xyXG4gICAgdmFyIG9wdGlvbnNUaW1lID0gMCA7XHJcblxyXG4gICAgJCgnW2lkPVwibGlnaHRcIl0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGJhc2VQcmljZSA9IGFsbE9wdGlvbnMubWFpbi5saWdodC5wcmljZTtcclxuICAgICAgICBiYXNlVGltZSAgPSBhbGxPcHRpb25zLm1haW4ubGlnaHQudGltZTtcclxuICAgICAgICBjaGVja0JveGVzLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5jaGFuZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tpZD1cIm1lZGl1bVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmFzZVByaWNlID0gYWxsT3B0aW9ucy5tYWluLm1lZGl1bS5wcmljZTtcclxuICAgICAgICBiYXNlVGltZSAgPSBhbGxPcHRpb25zLm1haW4ubWVkaXVtLnRpbWU7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGNoZWNrQm94ZXMuY2hhbmdlKCk7XHJcbiAgICB9KTtcclxuICAgICQoJ1tpZD1cInByZW1pdW1cIl0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGJhc2VQcmljZSA9IGFsbE9wdGlvbnMubWFpbi5wcmVtaXVtLnByaWNlO1xyXG4gICAgICAgIGJhc2VUaW1lICA9IGFsbE9wdGlvbnMubWFpbi5wcmVtaXVtLnRpbWU7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGNoZWNrQm94ZXMuY2hhbmdlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBjaGVja0JveGVzLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICBvcHRpb25zUHJpY2UgPSAwO1xyXG4gICAgICAgIG9wdGlvbnNUaW1lID0gMCA7XHJcbiAgICAgICAgJCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1ByaWNlICs9IGFsbE9wdGlvbnNbJ29wdGlvbnMnXVt0aGlzLmlkXVsncHJpY2UnXTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNUaW1lICArPSBhbGxPcHRpb25zWydvcHRpb25zJ11bdGhpcy5pZF1bJ3RpbWUnXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRvdGFsUHJpY2UgPSBwYXJzZUludChiYXNlUHJpY2UpICsgcGFyc2VJbnQob3B0aW9uc1ByaWNlKSA7XHJcbiAgICAgICAgdG90YWxUaW1lICA9IHBhcnNlSW50KGJhc2VUaW1lKSAgKyBwYXJzZUludChvcHRpb25zVGltZSkgIDtcclxuXHJcbiAgICAgICAgdXBkYXRlVG90YWxQcmljZWFuZFRpbWUodG90YWxQcmljZSx0b3RhbFRpbWUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbFByaWNlYW5kVGltZSh0b3RhbFByaWNlLHRvdGFsVGltZSl7XHJcbiAgICAgICAgJCgnI3RvdGFsUHJpY2UnKS5odG1sKCckJyt0b3RhbFByaWNlKTtcclxuICAgICAgICB2YXIgdGltZSA9ICfQvNC10YHRj9GG0LAnIDtcclxuICAgICAgICBpZih0b3RhbFRpbWUgPT0gMSApe1xyXG4gICAgICAgICAgICB0aW1lID0gJ9C80LXRgdGP0YYnO1xyXG4gICAgICAgIH1lbHNlIGlmKHRvdGFsVGltZT40KXtcclxuICAgICAgICAgICAgdGltZSA9ICfQvNC10YHRj9GG0LXQsicgO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjdG90YWxUaW1lJykuaHRtbCh0b3RhbFRpbWUrJyAnK3RpbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKkFuaW1hdGlvbiovXHJcbiAgICAkKFwiI2Nvc3QsICNmZWF0dXJlLCAjd2h5LXVzLCAjcHJvbW90aW9uXCIpLmFuaW1hdGVkKFwic2xpZGVJblVwXCIsIFwic2xpZGVPdXRVcFwiKTtcclxuICAgICQoXCIub3B0aW9ucywgLndyYXAtY29zdCwgLmhvbWUtYnV0dG9uXCIpLmFuaW1hdGVkKFwic2xpZGVJblVwXCIsIFwic2xpZGVPdXRVcFwiKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4vLyAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuLy9cclxuLy8gICAgICQoXCIudGl0bGUtY2VudGVyIGgxXCIpLmFuaW1hdGVkKFwic2xpZGVJblVwXCIsIFwic2xpZGVPdXRVcFwiKTtcclxuLy9cclxuLy8gfSk7Il19
