var overviewerConfig = {
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1595365311"
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1595365080,
            "isOverlay": false,
            "name": "Daytime Render",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 9,
            "maxZoom": 9,
            "minZoom": 0,
            "defaultZoom": 1,
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    }
};
