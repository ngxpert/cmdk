import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CmdkComponent } from './cmdk.component';

describe('CmdkComponent', () => {
  let spectator: Spectator<CmdkComponent>;
  const createComponent = createComponentFactory(CmdkComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
