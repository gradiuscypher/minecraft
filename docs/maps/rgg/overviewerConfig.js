var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "defaultZoom": 1,
            "path": "day",
            "north_direction": 0,
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "zoomLevels": 8,
            "maxZoom": 8,
            "last_rendertime": 1598309779,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "world": "world",
            "minZoom": 0
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1598310168"
    }
};
