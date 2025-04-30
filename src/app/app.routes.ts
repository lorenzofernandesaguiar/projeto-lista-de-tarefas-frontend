import { Routes } from '@angular/router';
import { ListaDeTarefasComponent } from './pages/lista-de-tarefas/lista-de-tarefas.component';
import { AdicionarTarefaComponent } from './pages/adicionar-tarefa/adicionar-tarefa.component';
import { EditarTarefaComponent } from './pages/editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './pages/excluir-tarefa/excluir-tarefa.component';

export const routes: Routes = [
    {
        path: '',
        component: ListaDeTarefasComponent,
        title: 'Lista de tarefas'
    },
    {
        path: 'adicionar-tarefa',
        component: AdicionarTarefaComponent,
        title: 'Adicionar tarefa'
    },
    {
        path: 'editar/:id',
        component: EditarTarefaComponent,
        title: 'Editar tarefa',
    },
    {
        path: 'excluir/:id',
        component: ExcluirTarefaComponent,
        title: 'Excluir tarefa',
    }
];