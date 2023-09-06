function Chat() {
  return (
    <div className="flex  flex-row justify-center bg-mainColor-2 dark:bg-mainColorDark-2">
      <div className="w-[100px]">
        leftSide
      </div>
      <div className="flex flex-col justify-between">
        <div className="h-[50px]">
          header
        </div>
        <div>
          messages
        </div>
        <div>
          enterMessage
        </div>
      </div>
    </div>
  )
}

export default Chat;
