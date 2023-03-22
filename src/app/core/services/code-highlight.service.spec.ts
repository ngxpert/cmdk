import { TestBed } from '@angular/core/testing';

import { CodeHighlightService } from './code-highlight.service';

describe('CodeHighlightService', () => {
  let service: CodeHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
