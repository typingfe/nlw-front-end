import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
    setOwnerName: (name: string) => void
    setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip,
    setOwnerEmail,
    setOwnerName,
}: ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                        <button onClick={closeConfirmTripModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Para concluir a criação da viagem para{' '}
                        <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de{' '}
                        <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus
                        dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className="space-y-3">
                    <div className="flex items-center gap-2 h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
                        <User className="text-zinc-400 size-5" />
                        <input
                            onChange={(event) => setOwnerName(event.target.value)}
                            type="text"
                            name="name"
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400  outline-none flex-1"
                        />
                    </div>

                    <div className="flex items-center gap-2 h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
                        <Mail className="text-zinc-400 size-5" />
                        <input
                            onChange={(event) => setOwnerEmail(event.target.value)}
                            type="email"
                            name="email"
                            placeholder="Seu e-mail pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400  outline-none flex-1"
                        />
                    </div>

                    <Button size="full" type="submit">
                        Confirmar criação da viagem
                    </Button>
                </form>
            </div>
        </div>
    )
}
