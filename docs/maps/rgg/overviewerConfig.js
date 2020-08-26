var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "north_direction": 0,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "last_rendertime": 1598453779,
            "base": "",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "name": "Daytime Render",
            "isOverlay": false,
            "maxZoom": 8,
            "path": "day",
            "minZoom": 0
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1598454167",
        "controls": {
            "pan": true,
            "mapType": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true
        }
    }
};
