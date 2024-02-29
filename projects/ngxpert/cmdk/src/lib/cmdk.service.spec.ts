import { createServiceFactory, SpectatorService } from '@ngxpert/spectator';
import { CmdkService } from './cmdk.service';

describe('CmdkService', () => {
  let spectator: SpectatorService<CmdkService>;
  const createService = createServiceFactory(CmdkService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});