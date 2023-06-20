import Form from "@/components/form"
import Footer from "@/components/footer"
import Messages from "@/components/messages"
import { ChatProvider } from "@/hooks/use-chat"

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <main>
      <ChatProvider threadId={id}>
        <Messages />
        <Form />
        <Footer />
      </ChatProvider>
    </main>
  )
}