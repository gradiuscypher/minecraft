var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "base": "",
            "isOverlay": false,
            "world": "world",
            "path": "day",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "last_rendertime": 1598532979,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "maxZoom": 8,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "mapType": true
        },
        "cacheTag": "1598533369",
        "north_direction": "lower-left",
        "debug": true
    }
};
