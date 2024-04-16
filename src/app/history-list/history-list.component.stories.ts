import type { Meta, StoryObj } from '@storybook/angular';
import { HistoryListComponent } from './history-list.component';

const meta: Meta<HistoryListComponent> = {
  title: 'Bunkers & Badasses/History List',
  component: HistoryListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HistoryListComponent>;

export const Primary: Story = {
    args: {
        data: [
            {
                level: 1,
                guild: "Alas!",
                rarity: 'Common',
                element: 'N/A',
                prefix: 'BIP!',
                type: 'Combat Rifle',
            },
            {
                level: 1,
                guild: "Alas!",
                rarity: 'Common',
                element: 'N/A',
                prefix: 'BIP!',
                type: 'Combat Rifle',
            },
            {
                level: 1,
                guild: "Alas!",
                rarity: 'Common',
                element: 'N/A',
                prefix: 'BIP!',
                type: 'Combat Rifle',
            },
        ]
    }
};
