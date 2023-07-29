import { Heading } from '@/components/heading'
import { MessageCircle } from 'lucide-react'
import React from 'react'

const ConversationPage = () => {
  return (
    <div>
        <Heading 
            title="Conversation"
            desc='Our most advanced conversation model'
            icon={MessageCircle}
            iconColor='text-violet-500'
            bgColor='bg-violet-500/10'
        />
    </div>
  )
}

export default ConversationPage