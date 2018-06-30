
function win_init(){

}

function win_new(app_type,sel_paient){
    var win_id;
    for(var i=1;i<=6;i++){
        if(!($("#wt"+i).attr("id"))){
            win_id=i;
            break;
        }
    }

    var id="wt"+win_id;
    var new_w='<div class="windows display" id="w'+win_id+'">'+win_id+'</div>'
    var new_tab='<div class="tab noactiveT" id="'+id+'" onclick="tab_click('+win_id+')" draggable="true" ondragstart="tab_drag(event)">';
    new_tab+='<img class="tab_img" src="icon/'+app_type+'A.png" style="width:25px;height:25px;float:left;">';
    new_tab+='<p class="tab_title" style="width:120px;height:100%;color:#2d2d2d;float:left;color:#fff" >test</p>';
    new_tab+='<img class="tab_button" src="icon/down.png" style="width:25px;height:25px;float:left;">';
    new_tab+='<img class="tab_button" id="tab_close" onclick="win_close('+win_id+')" src="icon/out.png" style="width:20px;height:20px;float:left;padding:4px;margin-top:3px;">';
    new_tab+='</div>';
    if(win_id){
        if($("#right_window").css("display")=="none"){
            if($("#left_window>.div_tab").children().length<6){
                $("#left_window>.div_tab").append(new_tab);
                $("#leftP").append(new_w);
                $(".windows.display").attr("class","windows");
                $("#w"+win_id).attr("class","windows display");
            }
        }else{
            if($("#left_window>.div_tab").children().length<3){
                $("#left_window>.div_tab").append(new_tab);
                $("#leftP").append(new_w);
                $(".windows.display").attr("class","windows");
                $("#w"+win_id).attr("class","windows display");
            }else{
                $("#right_window>.div_tab").append(new_tab);
                $("#rightP").append(new_w);
                $("#w"+win_id).attr("class","windows display");
            }
        }
        $(".tab.activeT").attr("class","tab noactiveT");
        $("#"+id).attr("class","tab activeT");

    }


}

function win_close(sel){
    console.log(sel);
    $("#wt"+sel).remove();
    
}