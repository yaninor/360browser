
// 如果在独立的js里要访问界面上的元素
// 那么最好把这段代码加在入口函数里，那样别人不管导入在前面还是后面都能生效
$(function(){

    $('#fullPage').fullpage({
        // 开启导航
        navigation:true,
        // 设置每一屏的背景颜色
        sectionsColor:['#00bfff','#9acd32','#ffa500','#008000','#87ceeb'],
        // 谁滚出来就触发的事件
        afterLoad:function(a,page){

            // $('.section1').addClass('animation');
            // $('.section2').addClass('animation');

            //谁滚出来了，再给谁加animation
            // page就代表滚出来的屏数，但是它是从1开始，要减1就能换算出它的下标

            // 谁滚出来谁才有animation,其他屏都会清掉animation
            $('.section').eq(page-1).addClass('animation').siblings().removeClass('animation');
        }
    });
})