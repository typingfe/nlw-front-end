import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Participant {
    id: string
    name: string | null
    email: string
    is_confirmed: boolean
}

export function Guests() {
    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Participant[]>([])

    useEffect(() => {
        if (tripId) {
            api.get(`/trips/${tripId}/participants`)
                .then((response) => setParticipants(response.data.participants))
                .catch((error) => {
                    console.error(error)
                })
        } else {
            console.error('tripId is undefined')
        }
    }, [tripId])

    return (
        <div>
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">convidados</h2>
                <div className="space-y-5">
                    {participants.map((participant, index) => {
                        return (
                            <div key={participant.id} className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">
                                        {participant.name ?? `Convidado ${index}`}
                                    </span>
                                    <span className="block text-sm text-zinc-400 truncate ">{participant.email}</span>
                                </div>
                                {participant.is_confirmed ? (
                                    <CircleCheck className="size-5 shrink-0 text-lime-300" />
                                ) : (
                                    <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                                )}
                            </div>
                        )
                    })}
                </div>

                <Button variant="secondary" size="full">
                    <UserCog className="size-5" />
                    Gerenciar Convidaos
                </Button>
            </div>
        </div>
    )
}
