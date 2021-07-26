const superbowlWin = (record)=>{
    const win = record.find( s => s.result === "W" );
    if (win) {
      return win.year
    } 
  }
