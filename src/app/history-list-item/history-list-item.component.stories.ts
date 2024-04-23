import type { Meta, StoryObj } from '@storybook/angular';
import { HistoryListItemComponent } from './history-list-item.component';

const meta: Meta<HistoryListItemComponent> = {
  title: 'Bunkers & Badasses/History List Item',
  component: HistoryListItemComponent,
};

export default meta;
type Story = StoryObj<HistoryListItemComponent>;

export const Primary: Story = {
    args: {
        gun:
            {
                level: 1,
                guild: "Alas!",
                rarity: 'Common',
                element: 'N/A',
                prefix: 'BIP!',
                type: 'Combat Rifle',
            },
    }
};
