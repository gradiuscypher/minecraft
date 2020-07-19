var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "north_direction": 0,
            "imgextension": "png",
            "showlocationmarker": true,
            "last_rendertime": 1595138179,
            "minZoom": 0,
            "poititle": "Markers",
            "world": "world",
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "path": "day",
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "zoomLevels": 8
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "compass": true
        },
        "cacheTag": "1595138562"
    }
};
