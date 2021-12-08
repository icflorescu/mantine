import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/ds/src';
import { Progress, ProgressProps } from '../Progress';
import { Progress as ProgressStylesApi } from '../styles.api';

const styles = generateBorderStyles(ProgressStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<ProgressProps>) {
  return <Progress {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl" value={40} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Progress/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Progress: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));