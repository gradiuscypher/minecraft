var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "path": "day",
            "showlocationmarker": true,
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "world": "world",
            "maxZoom": 8,
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "last_rendertime": 1594522323,
            "imgextension": "png",
            "defaultZoom": 1,
            "zoomLevels": 8,
            "north_direction": 0,
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594645463"
    }
};
