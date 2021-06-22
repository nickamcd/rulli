import { useForm } from "react-hook-form"

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <div className="contact page">
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={ handleSubmit(onSubmit) } >
        <input type="text" name="user_name" { ...register('user_name', { required: true, maxLength: 30 }) } placeholder="Name" />
        <br />
        <input type="email" name="user_email" { ...register('user_email', { required: true }) } placeholder="Email" />
        <br />
        <textarea name="message" { ...register('message', { required: true, maxLength: 1500 }) } placeholder="Message" />
        <p className='message-chars-left'>{messageCharsLeft} chars left</p>
        <input type="submit" value="Send" className="submit" />
      </form>
    </div>
  )
}

export default Contact