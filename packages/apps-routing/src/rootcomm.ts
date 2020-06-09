// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import RootComm, { useCounter } from '@polkadot/app-root-comm';

export default function create(t: <T = string> (key: string, text: string, options: { ns: string }) => T): Route {
  return {
    Component: RootComm,
    display: {
      needsAccounts: true,
      needsApi: [
        'query.rootCommittee.members'
      ]
    },
    icon: 'microchip',
    name: 'rootcomm',
    text: t<string>('nav.root-comm', 'Root comm.', { ns: 'apps-routing' }),
    useCounter
  };
}
