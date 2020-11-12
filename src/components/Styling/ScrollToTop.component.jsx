import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * @return {null}
 */
function ScrollToTop({ history }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
        return () => {
            unlisten();
        }
    }, [history]);

    return null;
}

export default withRouter(ScrollToTop);