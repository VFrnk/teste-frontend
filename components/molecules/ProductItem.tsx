import Link from 'next/link';
import ProductType from '@/types/ProductType';

interface ProductItemProps {
  item: ProductType;
}

export default function ProductItem({ item }: ProductItemProps) {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 rounded-xl border border-foreground/20 bg-card p-5 transition-all hover:border-blue-400 sm:flex-row sm:items-center">
      
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs font-medium text-foreground/70">
          #{item.id.toString().padStart(3, '0')}
        </span>
        
        <div>
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {item.product}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
              {item.category}
            </span>
            <span className="text-sm text-foreground/70">
              {new Date(item.date).toLocaleDateString('pt-BR')}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-6 sm:w-auto">
        <div className="text-left sm:text-right">
          <p className="text-xs text-foreground/70">Preço unitário</p>
          <p className="text-lg font-black foreground">
            R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <Link 
          href={`/crud/${item.id}`}
          className="rounded-lg bg-background px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-600 active:scale-95"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
};