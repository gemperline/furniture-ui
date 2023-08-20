import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button, ClickAwayListener, Divider, Grid, IconButton, Link, List, ListItem, ListItemText, Paper, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigationMenu } from './store/navigation.selectors';
import { navigationActions } from './store/navigation.redux';
import { keyframes } from 'tss-react';
import { PrivateComponent } from '../PrivateComponent/PrivateComponent';

const useStyles = makeStyles<{ open: boolean }>()((theme: Theme, props) => ({
    navMenu: {
        display: 'flex',
        flexDirection: 'column',
        // height: !props.open ? '60px' : '200px',
        position: 'fixed',
        top: 0,
        borderBottom: 'solid 2px rgba(231,110,73,1)',
    },
    navBar: {
        width: '100%',
        height: '60px',
        boxShadow: props.open ? '0px 1px 6px #757575' : 'none',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        backgroundColor: '#FFF',
        fontSize: '24px',
    },
    drawerCollapse: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    companyName: {
        justifyContent: 'flex-start',
        display: 'flex',
        whiteSpace: 'nowrap',
        letterSpacing: -1,
    },
    leftMenu: {
        display: 'flex',
    },
    rightMenu: {
        marginLeft: 'auto',
    },
    navIcon: {
        background: 'none',
    },
    divider: {
        background: 'rgba(231,110,73,1)',
        height: '2px',
    },
    font: {
        [theme.breakpoints.up('xs')]: {
          fontSize: '12px !important',
        },
    },
    listWrapperExpanded: {
        width: 'auto',
        animation: `${keyframes`
        0% {
          width: auto;
        }
        100% {
          width: 181px;
        }
        `} 150ms linear 1 normal forwards`,
      },
      listWrapperCollapsed: {
        width: '181px',
        animation: `${keyframes`
        0% {
          width: 181px;
        }
        100% {
          width: auto;
        }
        `} 150ms linear 1 normal forwards`,
      },
      menuListExpanded: {
        // height: 'unset',
        display: 'contents',
        paddingBottom: '0px',
        animation: `${keyframes`
        1% {
          height: 100vh;
          padding-bottom: 50px;
        }
        100% {
          height: 100vh;
          padding-bottom: 50px;
        }
        `} 150ms linear 1 normal forwards`,
      },
      menuList: {
        // position: 'relative',
        zIndex: theme.zIndex.drawer + 2,
        boxShadow: '4px -1px 4px -1px rgba(0,0,0,0.24)',
        display: 'flex',
        flexDirection: 'column',
      },
      menuListCollapsed: {
        // height: '100vh',
        display: 'none',
        paddingBottom: '50px',
        animation: `${keyframes`
        0% {
          height: 100vh;
          padding-bottom: 50px;
        }
        98% {
          height: 100vh;
          padding-bottom: 50px;
        }
        99% {
          height: unset;
          padding-bottom: 0px;
        }
        100% {
          height: unset;
          padding-bottom: 0px;
        }
        `} 150ms linear 1 normal forwards`,
      },
}));

export const Navbar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const { classes, cx } = useStyles({ open });
    const { t } = useTranslation();
    const { navigationMenu, navigationExpanded } = useSelector(selectNavigationMenu);

    const toggleMenuOpen = () => {
        setOpen(prev => !prev);
    };

    const closeMenu = () => { 
        if (open) {
        //   setExpandSubMenu({});
        setOpen(false);
        }
    };

    return (
        <>
            <ClickAwayListener onClickAway={closeMenu}>
                <Paper classes={{ root: `${classes.navMenu} ${open ? classes.drawer : classes.drawerCollapse}` }}>
                    <Grid className={classes.navBar}>
                        <Grid className={classes.leftMenu}>
                            <IconButton onClick={toggleMenuOpen}>
                                {open ? <CloseIcon className={classes.navIcon} /> : <MenuIcon className={classes.navIcon} />}
                            </IconButton>
                        </Grid>
                        <Grid className={classes.companyName}>
                            {t('Modern Magic')}
                        </Grid>
                        <Grid className={classes.rightMenu}>
                            <IconButton>
                                <AccountCircleIcon className={classes.navIcon} />
                            </IconButton>
                            <IconButton>
                                <ShoppingCartIcon className={ classes.navIcon } />
                            </IconButton>
                        </Grid>
                    </Grid>
                    {open && (
                        <div
                        style={{ overflow: 'hidden' }}
                        className={cx({
                          [classes.listWrapperExpanded]: navigationExpanded,
                          [classes.listWrapperCollapsed]: !navigationExpanded,
                        })}
                      >
                        <List
                          id="global-nav-list"
                          disablePadding
                          className={cx(classes.menuList, {
                            [classes.menuListExpanded]: open,
                            [classes.menuListCollapsed]: !open,
                          })}
                          sx={{ overflowY: 'auto' }}
                        //   onMouseEnter={() => {
                        //     if (!navigationExpanded) {
                        //       toggleMenu();
                        //       setNavigationExpandedByHover(true);
                        //     }
                        //   }}
                        //   onMouseLeave={() => {
                        //     if (navigationExpandedByHover) {
                        //       setNavigationExpandedByHover(false);
                        //       closeMenu();
                        //     }
                        //   }}
                        >
                          {navigationMenu.map((menuItem, index) => (
                            <PrivateComponent key={index}>
                              <NavMenuItem
                                menuItem={menuItem}
                                index={index}
                                open={open}
                                navigationExpanded={navigationExpanded}
                              />
                            </PrivateComponent>
                          ))}
                        </List>
                      </div>
                    )}
                </Paper>
            </ClickAwayListener>
            <Divider className={classes.divider} />
        </>
    )
};

const NavMenuItem = ({ open, ...props }) => {
    const { menuItem, index, navigationExpanded } = props;
    const { classes, cx } = useStyles({ open });
    const { t } = useTranslation();
  
    return (
      <ListItem
        classes={{
        //   root: cx(classes.listItem),
        //   gutters: classes.listItemGutters,
        }}
        key={menuItem.tag}
        // className={cx({
        //   [classes.option]: !isMenuItemSelected && !isSubMenuSelected,
        //   [classes.optionSelected]: isMenuItemSelected || isSubMenuSelected,
        // })}
      >
          <Grid container wrap="nowrap" style={{ marginLeft: '0px', display: 'block' }}>
            <Grid item>
                {/* <div
                  id={`navigation-expandable-${index}`}
                  className={cx(classes.menuInner, classes.menuInnerCollapsed, classes.menuInnerExpanded, {
                    [classes.menuItemSelected]: isMenuItemSelected,
                    'navigation-expanded': navigationExpanded === true,
                    'navigation-collapsed': navigationExpanded === false,
                  })}
                >
                  <List
                    disablePadding
                    className={classes.menuListInner}
                    style={{
                      color: isMenuItemSelected || isSubMenuSelected ? colors.amnPurple : 'white',
                    }}
                  >
                    <ListItem
                      disabled={menuItem.disabled}
                      disableGutters
                      className={cx(classes.menuItem, {
                        [classes.menuItemClickable]: menuItem.clickable !== false,
                      })}
                    >*/}
                      <ListItemText
                        primaryTypographyProps={{ className: classes.font }}
                        onClick={() => {
                          if (menuItem.clickable !== false) props.menuItemClicked(menuItem);
                        }}
                      >
                        {menuItem.tag}
                      </ListItemText>
                     {/*</Grid> {menuItem.subMenu && (
                        <Box
                          onClick={() => {
                            props.expandCollapseSubMenu(menuItem);
                          }}
                        >
                          {expandSubMenu[menuItem.key] ? (
                            <ExpandLess
                              className={cx(classes.expandIcon, {
                                [classes.menuItemClickable]: !menuItem.disabled,
                              })}
                            />
                          ) : (
                            <ExpandMore
                              className={cx(classes.expandIcon, {
                                [classes.menuItemClickable]: !menuItem.disabled,
                              })}
                            />
                          )}
                        </Box>
                      )}
                    </ListItem>
                    {menuItem.subMenu && (
                      <SubMenu
                        menuItem={menuItem}
                        expandSubMenu={expandSubMenu}
                        onExpand={props.expandCollapseSubMenu}
                        selectedMenu={selectedMenu}
                        selectedSubMenu={selectedSubMenu}
                        subMenuItemClicked={props.subMenuItemClicked}
                        level={0}
                      />
                    )}
                  </List>
                </div> */}
            </Grid>
          </Grid>
      </ListItem>
    );
  };