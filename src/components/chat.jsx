function Chat() {
  return (
    <div className="justify-center max-w-[1294px] max-h-[calc(100vh-100px)] w-full h-full m-5 rounded text-mainFontColor dark:text-mainFontColorDark shadow-lg dark:shadow-none dark:drop-shadow-dark bg-mainColor-2 dark:bg-mainColorDark-2">
      <div className="flex flex-row h-full">
        <div className="w-full max-w-[150px] border-r border-gray-500/50">
          leftSide
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="h-[50px] p-2">
            header
          </div>
          <div className="h-full px-10 pt-5 pb-2">
            messages
          </div>
          <div className="h-[60px] p-2">
            enterMessage
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
