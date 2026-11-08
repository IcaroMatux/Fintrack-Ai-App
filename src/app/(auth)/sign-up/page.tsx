import { AuthLayout } from '../_components/auth-layout'
import ArrowIcon from '../../../assets/arrow-icon.png'
import Image from 'next/image'
import { inputClass } from '../_styles/input'

export default function SignUpPage() {
    return (
        <AuthLayout
            title="Criar Conta"
            description="Preencha os dados para começar"
            footerText="Já tem uma conta?"
            footerLinkText="Entrar"
            footerHref="/sign-in"
        >
            <form className="space-y-6" action="">
                <label className="block text-sm text-zinc-300 mb-2">Nome</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    className={inputClass}
                />

                <div className="space-y-2">
                    <label className="block text-sm text-zinc-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        className={inputClass}
                    />
                </div>
                <label className="block text-sm text-zinc-300 mb-2">
                    Senha (min 8 caracteres)
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="............"
                    className={inputClass}
                />

                <button
                    type="submit"
                    className="w-full bg-[#9333EA] flex items-center justify-center text-white py-4 rounded-2xl font-semibold hover:bg-[#7E22CE] gap-2 transition-colors cursor-pointer"
                >
                    <span>Criar Conta</span>
                    <Image src={ArrowIcon} alt="Ícone de seta do botão" />
                </button>
            </form>
        </AuthLayout>
    )
}
