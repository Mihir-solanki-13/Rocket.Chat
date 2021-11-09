import React, { ReactElement } from 'react';

import { useRouteLock } from './hooks/useRouteLock';
import I18nProvider from './providers/I18nProvider';
import SetupWizardProvider from './providers/SetupWizardProvider';

export const SetupWizardRoute = (): ReactElement | null => {
	const locked = useRouteLock();

	if (locked) {
		return null;
	}

	return (
		<I18nProvider>
			<SetupWizardProvider />
		</I18nProvider>
	);
};

export default SetupWizardRoute;
