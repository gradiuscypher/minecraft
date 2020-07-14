var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "defaultZoom": 1,
            "maxZoom": 9,
            "base": "",
            "path": "day",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "north_direction": 0,
            "poititle": "Markers",
            "last_rendertime": 1594756530,
            "name": "Daytime Render",
            "zoomLevels": 9
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "pan": true
        },
        "cacheTag": "1594756937"
    }
};
