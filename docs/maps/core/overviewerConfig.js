var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "showlocationmarker": true,
            "defaultZoom": 1,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "maxZoom": 9,
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 9,
            "minZoom": 0,
            "base": "",
            "poititle": "Markers",
            "last_rendertime": 1594191476,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "path": "day"
        }
    ],
    "map": {
        "cacheTag": "1594191740",
        "controls": {
            "compass": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "debug": true
    }
};
