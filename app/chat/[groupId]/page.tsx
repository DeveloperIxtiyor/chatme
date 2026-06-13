// frontend/app/chat/[groupId]/page.tsx
import { ChatArea } from "@/components/chat/ChatArea"

interface Props {
	params: Promise<{ groupId: string }>
}

// Next.js sahifalari uchun 'export default' bo'lishi shart!
export default async function GroupChatPage({ params }: Props) {
	// Dinamik URL'dan kelgan guruh ID'sini olamiz
	const { groupId } = await params

	return (
		<div className="h-full w-full overflow-hidden">
			{/* Komponentga ID'ni raqam formatida xavfsiz uzatamiz */}
			<ChatArea groupId={Number(groupId)} />
		</div>
	)
}
