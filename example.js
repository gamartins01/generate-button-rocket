async function sendParcialResponse(usuario, messages, buttons) { 
  if (buttons) { 
    let buttonList = []; 
    buttons.forEach(button => { 
      buttonList.push({ 
        type: "button", 
        text: button.label, 
        msg: button.value, 
        msg_in_chat_window: true, 
        temporary_buttons: false, 
        button_alignment: "horizontal", 
        webview_height_ratio: "full", 
        is_webview: true 
      }); 
    }); 
    await driver.sendDirectToUser({ 
      msg: messages.join("\n"), 
      attachments: [ 
        { 
          button_alignment: "horizontal", 
          actions: buttonList 
        } 
      ] 
    }, usuario); 
  } 
  else { 
    await driver.sendDirectToUser({ 
      msg: messages.join("\n") 
    }, usuario); 
  } 
} 