import { Product } from './producto.entity';
//no se puede realizar inyeccion de dependencias de una interface, por lo cual es mejor hacer una clase abstracta
//en los modulos provider de angular no podemos definir una interface si no una clase abstracta
//Interface no tiene instancia
//se usa abstract class en vez de class, ya que al usar una clase no aseguramos que sea implementado
interface ProductRepository {
  get(): Product[];
}
