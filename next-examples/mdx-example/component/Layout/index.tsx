import React, { ReactNode } from "react";
import { MDXProvider } from '@mdx-js/react'

const Layout = ({ children }: React.PropsWithChildren<ReactNode>): JSX.Element => {
    const components = {
        wrapper: (props: JSX.Element) => (
            <div style={{ padding: "20px", backgroundColor: "tomato" }}>
                <main {...props} />
            </div>
        )
    }
    
    return (
      <>
        <div>
            <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </>
    )
  }

  export default Layout;
