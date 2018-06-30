$(document).ready(function(){
    //init
    var block_height=$("#left_button_panel").height()-18*$(".left_button").height();
    $("#blank_block").height(block_height);
    $("#accountT").show();

    var wcp=$("#main").width()-27;
    var wcps=wcp+"px";
    $("#win_change").css({left:wcps});
    //end init

    $(".left_button").click(function(){

        if($(this).attr("title")!="active"){
            if($(this).attr("id")!="account"){
                win_new($(this).attr("id"),0);
            }
            if($("#left_detail_panel").width()==0){
                $("#main_window").animate({width:'81.8%'});
                $("#left_detail_panel").animate({width:'15.7%'});
            }
            $(".left_button.active").attr("title","noactive");
            $(".left_button.active").attr("class","left_button noactive");
    
            $(this).attr("class","left_button active");
            $(this).attr("title","active");

        }else{
            if($("#left_detail_panel").width()>0){
                $("#left_detail_panel").animate({width:'0%'});
                $("#main_window").animate({width:'97.5%'});
                $(this).attr("title","noactive");
                $(this).attr("class","left_button noactive");
            }else{
                $("#main_window").animate({width:'81.8%'});
                $("#left_detail_panel").animate({width:'15.7%'});
                $(this).attr("title","active");
                $(this).attr("class","left_button active");
            }
        }

        $(".tool.active").hide();
        $(".tool.active").attr("class","tool noactive");
        var sel="#"+$(this).attr("id")+"T";
        $(sel).show();
        $(sel).attr("class","tool active");

    })

    $("#exit_no").click(function(){
        $("#exit_panel").hide();
    })

    $("#power").click(function(){
        $("#exit_panel").show();
    })

    $("#exit_yes").click(function(){
        self.opener=null;
        self.close();
    })


    //window change
    $("#win_change").mouseover(function(){
        if($("#right_window").css("display")=="none"){
            $(this).attr("src","icon/add.png");
        }else{
            $(this).attr("src","icon/remove.png");
        }
    })
    $("#win_change").mouseout(function(){
        $(this).attr("src","icon/point.png");
    })
    $("#win_change").click(function(){
        if($("#right_window").css("display")=="none"){
            $("#left_window").css({width:"50%"});
            for(var i=4;i<=6;i++){
                if($("#wt"+i).attr("id")){
                    $("#right_window>.div_tab").append($("#wt"+i));
                    $("#right_window>.div_panel").append($("#w"+i));
                }
            }
            $("#right_window").show();
        }else{
            if($("#right_tab>.activeT").attr("id")){
                $("#left_window>.div_panel>.display").attr("class","windows");
            }
            for(var i=0;i<$("#right_window>.div_tab").children().length;i++){
                $("#left_window>.div_tab").append($("#right_window>.div_tab").children()[i]);
                $("#left_window>.div_panel").append($("#right_window>.div_panel").children()[i]);
            }
            $("#right_window").hide();
            $("#left_window").css({width:"100%"});
        }
    })



})

function tab_click(id){
    $(".tab.activeT").attr("class","tab noactiveT");
    $("#wt"+id).attr("class","tab activeT");
    if($("#wt"+id).attr("id")){
        var app_type=$("#wt"+id+">.tab_img").attr("src").split("/")[1].split("A")[0];
        app_type="#"+app_type+"T";
        $(".tool.active").hide();
        $(".tool.active").attr("class","tool noactive");
        $(app_type).show();
        $(app_type).attr("class","tool active");
    }
}

//drag window
function allowDrop(ev)
{
    ev.preventDefault();
}
function tab_drag(ev)
{
    ev.dataTransfer.setData("Text",ev.target.id);
}
function tab_drop(ev)
{
    if($("#"+ev.target.id).children().length<3){
        ev.preventDefault();
        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }
}