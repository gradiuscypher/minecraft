var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "world": "world",
            "north_direction": 0,
            "minZoom": 0,
            "isOverlay": false,
            "poititle": "Markers",
            "maxZoom": 8,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "last_rendertime": 1596844579,
            "imgextension": "png"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "zoom": true,
            "spawn": true
        },
        "cacheTag": "1596844965",
        "debug": true
    }
};
