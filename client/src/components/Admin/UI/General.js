import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Button, Popover, PopoverHeader, PopoverBody, Tooltip } from 'reactstrap';

class UiGeneral extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
        // Popover
        popovertop: false,
        popoverleft: false,
        popoverright: false,
        popoverbottom: false,
    };
    
    this.toggletop = this.toggletop.bind(this);
    this.toggleright = this.toggleright.bind(this);
    this.toggleleft = this.toggleleft.bind(this);
    this.togglebottom = this.togglebottom.bind(this);
    this.toggledismiss = this.toggledismiss.bind(this);
    this.toggledismissclose = this.toggledismissclose.bind(this);
  }

  toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
  toggleleft() { this.setState({ popoverleft: !this.state.popoverleft }); }
  toggleright() { this.setState({ popoverright: !this.state.popoverright }); }
  togglebottom() { this.setState({ popoverbottom: !this.state.popoverbottom }); }
  toggledismiss() { this.setState({ popoverdismiss: !this.state.popoverdismiss }); }
  toggledismissclose() { this.setState({ popoverdismiss: false }); }

  render() {
    return (
      <React.Fragment>
         <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="page-title-box">
                                    <h4 className="font-size-18">General</h4>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to="/#">Veltrix</Link></li>
                                        <li className="breadcrumb-item"><Link to="/#">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">General</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="float-right d-none d-md-block">
                                   <SettingMenu />
                                </div>
                            </div>
                        </div>     

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div>
                                                    <h4 className="card-title">badges</h4>
                                                    <p className="card-title-desc">Add any of the below mentioned modifier classNamees to change the appearance of a badge.</p>
                                                    <div>
                                                        <span className="badge badge-primary">Primary</span>{' '}
                                                        <span className="badge badge-success">Success</span>{' '}
                                                        <span className="badge badge-info">Info</span>{' '}
                                                        <span className="badge badge-warning">Warning</span>{' '}
                                                        <span className="badge badge-danger">Danger</span>{' '}
                                                        <span className="badge badge-dark">Dark</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div>
                                                    <h4 className="card-title mo-mt-2">Pill badges</h4>
                                                    <p className="card-title-desc">Use the <code>.badge-pill</code> modifier className to make
                                                    badges more rounded (with a larger <code>border-radius</code>
                                                    and additional horizontal <code>padding</code>).
                                                    Useful if you miss the badges from v3.</p>
        
                                                    <div>
                                                        <span className="badge badge-pill badge-primary">Primary</span>{' '}
                                                        <span className="badge badge-pill badge-success">Success</span>{' '}
                                                        <span className="badge badge-pill badge-info">Info</span>{' '}
                                                        <span className="badge badge-pill badge-warning">Warning</span>{' '}
                                                        <span className="badge badge-pill badge-danger">Danger</span>{' '}
                                                        <span className="badge badge-pill badge-dark">Dark</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
        
                                        <h4 className="card-title">Popovers</h4>
                                        <p className="card-title-desc">Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>
        
                                        <div className="button-items">

                                        <Button id="Popovertop" color="primary" onClick={this.toggletop} >
                                          Popover on top
                                        </Button>
                                        <Popover placement="top" isOpen={this.state.popovertop} target="Popovertop" toggle={this.toggletop}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;
       
                                        <Button id="Popoverright" onClick={this.toggleright} color="primary">
                                          Popover on right
                                        </Button>
                                        <Popover placement="right" isOpen={this.state.popoverright} target="Popoverright" toggle={this.toggleright}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;

                                        <Button id="Popoverbottom" onClick={this.togglebottom} color="primary">
                                          Popover on bottom
                                        </Button>
                                        <Popover placement="bottom" isOpen={this.state.popoverbottom} target="Popoverbottom" toggle={this.togglebottom}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;

                                          <Button id="Popoverleft" onClick={this.toggleleft} color="primary">
                                          Popover on left
                                        </Button>
                                        <Popover placement="left" isOpen={this.state.popoverleft} target="Popoverleft" toggle={this.toggleleft}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover> &nbsp;

                                       <Button id="Popoverdismiss"  className="btn btn-success mt-2" onClick={this.toggledismiss}>
                                          Dismissible popover
                                        </Button>
                                        <Popover  onClick={this.toggledismissclose} placement="bottom" isOpen={this.state.popoverdismiss} target="Popoverdismiss" toggle={this.toggledismiss}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover>

                                        </div>
        
                                    </div>
                                </div>
        
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
        
                                        <h4 className="card-title">Tooltips</h4>
                                        <p className="card-title-desc">Hover over the links below to see tooltips:</p>
        
                                        <div className="button-items">
                                <Tooltip placement="top" isOpen={this.state.tttop} target="TooltipTop" toggle={()=> this.setState({ tttop: !this.state.tttop  })}>Hello world!</Tooltip>
                                <Tooltip placement="right" isOpen={this.state.ttright} target="TooltipRight" toggle={()=> this.setState({ ttright: !this.state.ttright  })}>Hello world!</Tooltip>
                                <Tooltip placement="bottom" isOpen={this.state.ttbottom} target="TooltipBottom" toggle={()=> this.setState({ ttbottom: !this.state.ttbottom  })}>Hello world!</Tooltip>
                                <Tooltip placement="left" isOpen={this.state.ttleft} target="TooltipLeft" toggle={()=> this.setState({ ttleft: !this.state.ttleft  })}>Hello world!</Tooltip>
                          
                            <button type="button" className="btn btn-primary" id="TooltipTop"> Tooltip on top</button>
                            <button type="button" className="btn btn-primary" id="TooltipBottom"> Tooltip on Bottom</button>
                            <button type="button" className="btn btn-primary" id="TooltipLeft"> Tooltip on Left</button>
                            <button type="button" className="btn btn-primary" id="TooltipRight"> Tooltip on Right</button>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Pagination</h4>
        
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h5 className="font-size-16 mt-0">Default Example</h5>
                                                <p className="card-title-desc">Pagination links indicate a series of related content exists across multiple pages.</p>
        
                                                <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                            </ul>
                                                </nav>
                
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item">
                                                        <Link className="page-link" to="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                    </Link>
                                                        </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                    </Link>
                                                </li>
                                                    </ul>
                                                </nav>
                                            </div>
        
                                            <div className="col-lg-6">
                                                <h5 className="font-size-16 mt-0">Disabled and active states</h5>
                                                <p className="card-title-desc">Pagination links are customizable for
                                                        different circumstances. Use <code>.disabled</code> for links that appear
                                                        un-clickable and <code>.active</code> to
                                                        indicate the current page.</p>
        
                                                <nav aria-label="...">
                                                    <ul className="pagination">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabindex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item active">
                                                            <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                
                                                <nav aria-label="...">
                                                    <ul className="pagination">
                                                        <li className="page-item disabled">
                                                            <span className="page-link">Previous</span>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item active">
                                                            <span className="page-link">
                                                                2
                                                                <span className="sr-only">(current)</span>
                                                            </span>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h5 className="font-size-16">Sizing</h5>
                                                <p className="card-title-desc">Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional
                                                        sizes.</p>
            
                                                <nav aria-label="...">
                                                    <ul className="pagination pagination-lg">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabindex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                
                                                <nav aria-label="...">
                                                    <ul className="pagination pagination-sm">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabindex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                    
                                            </div>
        
                                            <div className="col-lg-6">
                                                <h5 className="font-size-16">Alignment</h5>
                                                <p className="card-title-desc">Change the alignment of pagination
                                                        components with flexbox utilities.</p>
            
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabindex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination justify-content-end">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabindex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Border spinner</h4>
                                        <p className="card-title-desc">Use the border spinners for a lightweight loading indicator.</p>
                                        <div>
                                            <div className="spinner-border text-primary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-secondary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-success m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-info m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-warning m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-danger m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-dark m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Growing spinner</h4>
                                        <p className="card-title-desc">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
                                        <div>
                                            <div className="spinner-grow text-primary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-secondary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-success m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-info m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-warning m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-danger m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-dark m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
      </React.Fragment>
    );
  }
}

export default UiGeneral;
