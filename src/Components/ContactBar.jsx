export const ContactBar = () => {


  return (
    <div className="flex flex-col font-sans">
      <div className="self-center text-lg">Let's Connect!</div>
      <div className="flex justify-center">
        <a href="mailto:chunghlken@gmail.com?subject=Hello Kenny&" className="p-2">✉️ Email</a>
        <a href="https://www.instagram.com/knnydj" target="_blank" className="p-2">Instagram</a>
        <a href="https://www.linkedin.com/in/chung-kenny" target="_blank" className="p-2">LinkedIn</a>
      </div>
    </div>
  )
}