$(document).ready(function() {    

    if(!localStorage.getItem('flov_watch_alerts')){
        localStorage.setItem('flov_watch_alerts', '[]');
    }
    
    let flov_watch_alerts = JSON.parse(localStorage.getItem('flov_watch_alerts'));
    
    function populateAlertsList(){
        if(flov_watch_alerts.length > 0){
            $('#alerts_list_container').show();
            
            $('#alerts_list').empty();
            
            $.each(flov_watch_alerts, function(key, val){
                let alert_output = '';
                for (const property in val) {
                    alert_output += `<strong>${property}</strong>: ${val[property]} `;
                }
                $('#alerts_list').append('<li id="' + key + '">' + alert_output + ' <span class="remove_alert_link" id="remove_alert_' + key + '">remove</span></li>');
            });
            
            $('.remove_alert_link').on('click', function(){
                if(confirm("Are you sure you want to remove this alert?")){
                    let alert_id_pieces = $(this).attr('id').split("_");
                    let alert_idx = alert_id_pieces[2];
                    
                    flov_watch_alerts.splice(alert_idx, 1);
                    
                    localStorage.setItem('flov_watch_alerts', JSON.stringify(flov_watch_alerts));
                    
                    populateAlertsList();
                }
            });
        }else{
            $('#alerts_list_container').hide();
        }
    }

    const form = document.getElementById('new_alert_form');
    form.addEventListener('submit', handleAddAlert);

    function handleAddAlert(event){
        event.preventDefault();
        let data = new FormData(event.target);
        let value = Object.fromEntries(data.entries());

        if(!JSON.stringify(flov_watch_alerts).includes(JSON.stringify(value))){
            flov_watch_alerts.push(value);
            localStorage.setItem('flov_watch_alerts', JSON.stringify(flov_watch_alerts));
        }else{
            alert('That alert already exists.');
        }

        populateAlertsList();
    }

    populateAlertsList();
});