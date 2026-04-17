import ProductType from '@/types/ProductType';
import Link from 'next/link';

interface ProductDetailsProps {
  product: ProductType;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="m-auto max-w-3xl rounded-2xl border border-white/20 bg-card p-8 shadow-sm">
      <Link 
        href="/crud" 
        className="mb-8 inline-flex items-center text-sm font-semibold text-blue-600 hover:underline"
      >
        ← Voltar para a lista completa
      </Link>

      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">
              ID #{product.id}
            </span>
            <h1 className="mt-1 text-4xl font-black text-foreground">{product.product}</h1>
          </div>
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">
            {product.category}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 rounded-xl bg-background p-6">
          <div>
            <p className="text-xs font-medium uppercase text-foreground/70">Valor de Venda</p>
            <p className="text-3xl font-black text-foreground">
              R$ {product.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase text-foreground/70">Data do Registro</p>
            <p className="text-xl font-bold text-foreground">
              {new Date(product.date).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h4 className="font-bold text-foreground">Descrição do Sistema</h4>
          <p className="text-foreground/70 leading-relaxed">
            Este produto pertence à categoria <strong>{product.category}</strong> e foi registrado 
            no sistema em {new Date(product.date).toLocaleDateString('pt-BR') ? new Date(product.date).toLocaleDateString('pt-BR', { dateStyle: 'full' }) : product.date}.
          </p>
        </div>
      </div>
    </div>
  );
};